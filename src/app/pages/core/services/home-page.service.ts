import { Injectable } from '@angular/core';
import { TeamMemberModal, StatisticsModal, ReviewModal } from '../modals/home-page.modal';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor() { }

  getTeamMembers() {
    let teamMembers: TeamMemberModal[] = [
      { id: 0, name: 'Mariam Youssri', title: 'Sofware Engineer', img: './assets/images/team-members/mariam.png' },
      { id: 1, name: 'Amr Ahmed Hamdy', title: 'Senior Software Engineer', img: './assets/images/team-members/amr.png' },
      { id: 2, name: 'Ahmed Gamal', title: 'Sofware Engineer', img: './assets/images/team-members/ahmed.png' },
      { id: 3, name: 'Marwan Abougabal', title: 'Sofware Engineer', img: './assets/images/team-members/marwan.png' },
      { id: 4, name: 'Mo\'men Ali', title: 'FE Sofware Engineer', img: './assets/images/team-members/moemen.png' },
      { id: 5, name: 'Mohamed Abdulla', title: 'Sofware Engineer', img: './assets/images/team-members/abdullah.png' }
    ];

    return teamMembers;
  }

  getStatistics() {
    let statisticsList: StatisticsModal[] = [
      { id: 0, value: '8', label: 'Jira board' },
      { id: 0, value: '15', label: 'Users' },
      { id: 0, value: '30+', label: 'Stories' },
      { id: 0, value: '100+', label: 'Subtasks' }
    ];

    return statisticsList;
  }

  getReviews() {
    let statisticsList: ReviewModal[] = [
      {
        id: 0, name: 'Ahmed Ali 1', title: 'Position', reviewNote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', reviewValue: '4.5'
      },
      {
        id: 1, name: 'Ahmed Ali 2', title: 'Position', reviewNote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', reviewValue: '4.5'
      },
      {
        id: 2, name: 'Ahmed Ali 3', title: 'Position', reviewNote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', reviewValue: '4.5'
      },
      {
        id: 3, name: 'Ahmed Ali 4', title: 'Position', reviewNote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', reviewValue: '4.5'
      },
    ];

    return statisticsList;
  }
}
