import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { SkillCard } from './core/class/skill-card';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService implements InMemoryDbService {

  constructor() { }

  createDb() {

    let skills: SkillCard[] = [
      { 
        id: 1, 
        name: 'Communication', 
        description: 'A nível organizacional, o desenvolvimento contínuo de distintas formas de atuação apresenta tendências no sentido de aprovar a manutenção das posturas dos órgãos dirigentes com relação às suas atribuições.', 
        pic: 'https://pixabay.com/get/g8315257376d277685d89b9a82f942f830693ea0d07eda726fd35d8be6818244779114019b03d81fd3eafcbea631fa538c40d2642828dbd51a19d8d0fce7b5506_1920.jpg', 
        likes: 1 
      },
      { 
        id: 2, 
        name: 'Coding', 
        description: 'O desenvolvimento contínuo de distintas formas de atuação dos órgãos dirigentes com relação às suas atribuições atuam diretamente a nível organizacional.', 
        pic: 'https://pixabay.com/get/ge4e989c310886db3b4a733fefafaeae9d331083f65545ad99b1cbb1615606268fb40b41dfae61545830bdb88ffcaf5a4f7e14cfebe51e184cad8d41a20d47a48_1920.jpg', 
        likes: 1 
      },
      { 
        id: 3, 
        name: 'Time Management', 
        description: 'No sentido de aprovar a manutenção das posturas distintas dos órgãos dirigentes com relação às suas atribuições distintas formas de atuação.', 
        pic: 'https://pixabay.com/get/g96507efbeb5c97783ac8d75d478aeafce371f2e80404429cba8ed69c1e9eb64c840197cb99c1fa697dfe3a8614f4314cf449bc99e91d100a84f2db61b56bcb38_1920.jpg', 
        likes: 1 
      },
      { 
        id: 4, 
        name: 'Problem Solving', 
        description: 'Distintas autuações distintas no sentido de aprovar as atribuições.', 
        pic: 'https://pixabay.com/get/gfe87b970f0b9e477b153cc42cd75599d09b615c8e5ac9e70122cd48ccd0c1986242cf8f16f54fd7c67680e52643cc215bfed6d249c3dde16e9e16915cfeddcbe_1920.jpg', 
        likes: 1 
      },
      { 
        id: 5, 
        name: 'UX Design', 
        description: 'An IT professional should be able to accurately assess how long a project should take, and then be able to stick to those timelines. He or she should also be able to help an entire team manage their time, on a daily, weekly, monthly, and project basis.', 
        pic: 'https://pixabay.com/get/g6ea697b06da93773935e22acdecac0998146b55a41e5f724660bba4f6ee12762be4ccba63ead7f171b7fd09cd138f8ab_1920.jpg', 
        likes: 1 
      },
      { 
        id: 6, 
        name: 'Collaboration', 
        description: 'IT professionals often have to provide tech solutions for people who aren’t as savvy. They have to demonstrate leadership at all levels of projects, and with many different groups.', 
        pic: 'https://pixabay.com/get/gc71fad2b5d7f572d12854972da9c86a8f04c805cc1f6c727e11e0a6309a56c0fe89f8ae4ebc7d7118adc1cb850a3a92f1581e4322d321d1208a45eee94a0a855_1920.jpg', 
        likes: 1 
      }
    ];

    return { skills };
  }
}
