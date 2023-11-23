import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMeetingRoomDto } from './dto/create-meeting-room.dto';
import { UpdateMeetingRoomDto } from './dto/update-meeting-room.dto';
import { MeetingRoom } from './entities/meeting-room.entity';

@Injectable()
export class MeetingRoomService {
  
  @InjectRepository(MeetingRoom)
  private repository: Repository<MeetingRoom>;

  initData() {
    const room1 = new MeetingRoom();
    room1.name = '木星';
    room1.capacity = 10;
    room1.equipment = '白板';
    room1.location = '一层西';

    const room2 = new MeetingRoom();
    room2.name = '金星';
    room2.capacity = 5;
    room2.equipment = '';
    room2.location = '二层东';

    const room3 = new MeetingRoom();
    room3.name = '天王星';
    room3.capacity = 30;
    room3.equipment = '白板，电视';
    room3.location = '三层东';

    // save 确定是 insert 的时候 用 insert 比用 save 更好，能够批量插入数据
    // 同理，确定是 update 的时候，也不要用 save，因为它会先 select 一次，再确定是 udpate 还是 insert
    this.repository.insert([room1, room2, room3]);
  }

  create(createMeetingRoomDto: CreateMeetingRoomDto) {
    return 'This action adds a new meetingRoom';
  }

  findAll() {
    return `This action returns all meetingRoom`;
  }

  findOne(id: number) {
    return `This action returns a #${id} meetingRoom`;
  }

  update(id: number, updateMeetingRoomDto: UpdateMeetingRoomDto) {
    return `This action updates a #${id} meetingRoom`;
  }

  remove(id: number) {
    return `This action removes a #${id} meetingRoom`;
  }
}
