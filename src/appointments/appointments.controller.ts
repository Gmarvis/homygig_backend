import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/createAppointmentDto';
import { UpdateAppointmentDto } from './dto/updateAppointmentDto';
import { ApiTags } from '@nestjs/swagger';
@Controller('appointments')
@ApiTags('Appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  //CREATE APPOINTMENT
  @Post()
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    console.log('appointment', createAppointmentDto);
    return this.appointmentsService.createAppointment(createAppointmentDto);
  }

  // GET ALL APPOINTMENTS
  @Get()
  findAll() {
    return this.appointmentsService.findAll();
  }

  // FIND BY USER ID
  @Get('/user/:id')
  async findByUserId(@Param('id') id: string) {
    return this.appointmentsService.findByUserId(id);
  }

  //  Find appointment by appointment id
  @Get('/:id')
  async findByAppointmentId(@Param('id') id: string) {
    // console.log("targeted")
    return this.appointmentsService.findOne(id);
  }

  // FIND BY PROVIDER ID
  @Get('/provider/:id')
  async findByProviderId(@Param('id') id: string) {
    return this.appointmentsService.findByProviderId(id);
  }

  // UPDATE APPOINTMENT
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentsService.update(id, updateAppointmentDto);
  }
}
