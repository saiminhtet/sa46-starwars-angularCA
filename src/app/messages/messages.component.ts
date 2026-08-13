import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  standalone: false,
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

   constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
