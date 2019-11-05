import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const employees = [
      { id: 11, name: 'Kohli',img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/10/31/Pictures/zealand-photo-final-cricket-world-india-semi_e3c5f58c-fbe2-11e9-aa29-bae48cf1d327.jpg"},
      {id: 12, name: 'Dhoni',img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201910/dhoni29102019_0-770x433.jpeg?7u84UK51rCNIQUXeBLvZgX4AJPGLDnVd"},
      { id: 13, name: 'Bumrah',img:"https://images.news18.com/ibnlive/uploads/1200x800/jpg/2019/07/Jasprit-Bumrah-4.jpg"},
      { id: 14, name: 'Rishab',img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mUt1LLiWVaeyErfrWONMHq2G7wtZmmf2k-PBqCVZxgLG1jBKXg&s"},
      { id: 15, name: 'Mongia' ,img:"http://www.espncricinfo.com/db/PICTURES/CMS/49800/49863.player.jpg" },
      { id: 16, name: 'Rohit',img:"https://c.ndtvimg.com/2019-07/1lfsn0n8_rohit-sharma-hundred-celebrate-afp_625x300_07_July_19.jpg"  },
      { id: 17, name: 'Rahane',img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/04/25/Pictures/england-series-india-carlton-game-odi-tri_0c3b86ee-6778-11e9-8193-fd2d71cfe7d0.jpg"  },
      { id: 18, name: 'Sachin' ,img:"https://www.cricket.com.au/~/-/media/News/2018/04/24sachin1.ashx?w=1600" },
      { id: 19, name: 'Ashwin',img:"https://www.cricket.com.au/~/-/media/News/2017/12/23raviashwin.ashx?w=1600" },
      { id: 20, name: 'Jadeja',img:"https://timesofindia.indiatimes.com/thumb/msid-70107488,imgsize-47717,width-400,resizemode-4/70107488.jpg"  }
  ];
  return {employees};
  }
  genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employee => employee.id)) + 1 : 11;
  }
}
