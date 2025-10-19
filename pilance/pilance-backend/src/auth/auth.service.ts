import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) return null;
    const matched = await bcrypt.compare(pass, user.password);
    if (matched) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async register(data: { name?: string; email: string; password: string }) {
    const hashed = await bcrypt.hash(data.password, 10);
    const user = await this.usersService.create({
      name: data.name,
      email: data.email,
      password: hashed
    });
    return this.login(user);
  }
}
