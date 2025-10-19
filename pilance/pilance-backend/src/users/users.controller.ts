import { Controller, Get, Param, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async me(@Req() req: any) {
    return this.usersService.findById(req.user.userId);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.usersService.findById(Number(id));
  }
}
