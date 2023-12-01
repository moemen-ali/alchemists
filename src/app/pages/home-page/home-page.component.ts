import { HomePageService } from './../core/services/home-page.service';
import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TeamMemberModal, StatisticsModal, ReviewModal } from '../core/modals/home-page.modal';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, SharedModule ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  teamMembersList: TeamMemberModal[];
  statisticsList: StatisticsModal[];
  reviewsList: ReviewModal[];


  constructor(private router: Router, private elementRef: ElementRef, private homePageService: HomePageService) {

  }

  ngOnInit() {
    this.getTeamMembers();
    this.getStatistics();
    this.getReviews();
  }

  getTeamMembers() {
    this.teamMembersList = this.homePageService.getTeamMembers();
  }
  getStatistics() {
    this.statisticsList = this.homePageService.getStatistics();
  }
  getReviews() {
    this.reviewsList = this.homePageService.getReviews();
  }


  navigateToSection(section: string) {
    const targetSection = this.elementRef.nativeElement.querySelector(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
