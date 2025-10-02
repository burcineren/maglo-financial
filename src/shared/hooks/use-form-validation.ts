import { useState, useCallback } from 'react';
import { type ZodSchema, ZodError, type ZodObject, type ZodRawShape } from 'zod';

export interface FormErrors {
  [key: string]: string;
}

type ZodObjectSchema = ZodObject<ZodRawShape>;

export function useFormValidation<T extends Record<string, unknown>>(
  schema: ZodSchema<T>
) {
  const [errors, setErrors] = useState<FormErrors>({});

  /**
   * Validate a single field
   */
  const validateField = useCallback(
    (fieldName: keyof T, value: unknown): string => {
      try {
        // Type guard to check if schema is ZodObject
        if ('shape' in schema) {
          const objectSchema = schema as unknown as ZodObjectSchema;
          const fieldSchema = objectSchema.shape[fieldName as string] as ZodSchema<unknown> | undefined;
          if (fieldSchema && 'parse' in fieldSchema) {
            fieldSchema.parse(value);
          }
        }
        return '';
      } catch (error) {
        if (error instanceof ZodError) {
          return error.issues[0]?.message || 'Validation error';
        }
        return 'Validation error';
      }
    },
    [schema]
  );

  /**
   * Validate entire form
   */
  const validateForm = useCallback(
    (formData: T): boolean => {
      try {
        schema.parse(formData);
        setErrors({});
        return true;
      } catch (error) {
        if (error instanceof ZodError) {
          const newErrors: FormErrors = {};
          error.issues.forEach((issue) => {
            const fieldName = issue.path[0] as string;
            if (fieldName) {
              newErrors[fieldName] = issue.message;
            }
          });
          setErrors(newErrors);
        }
        return false;
      }
    },
    [schema]
  );

  /**
   * Validate form and return parsed data
   */
  const validateAndParse = useCallback(
    (formData: T): { success: true; data: T } | { success: false; errors: FormErrors } => {
      try {
        const parsed = schema.parse(formData);
        setErrors({});
        return { success: true, data: parsed };
      } catch (error) {
        if (error instanceof ZodError) {
          const newErrors: FormErrors = {};
          error.issues.forEach((issue) => {
            const fieldName = issue.path[0] as string;
            if (fieldName) {
              newErrors[fieldName] = issue.message;
            }
          });
          setErrors(newErrors);
          return { success: false, errors: newErrors };
        }
        return { success: false, errors: { _form: 'Validation failed' } };
      }
    },
    [schema]
  );

  /**
   * Clear error for specific field
   */
  const clearError = useCallback((fieldName: string) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
  }, []);

  /**
   * Clear all errors
   */
  const clearAllErrors = useCallback(() => {
    setErrors({});
  }, []);

  /**
   * Set custom error
   */
  const setError = useCallback((fieldName: string, message: string) => {
    setErrors((prev) => ({
      ...prev,
      [fieldName]: message,
    }));
  }, []);

  return {
    errors,
    validateField,
    validateForm,
    validateAndParse,
    clearError,
    clearAllErrors,
    setError,
  };
}
