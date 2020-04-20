import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'pm-star',
  styleUrls: ['./star.component.css'],
  templateUrl: './star.component.html'
})
export class StarComponent implements OnInit, OnChanges, OnDestroy {
  @Input() rating: number;
  @Output() changeRating: EventEmitter<number> = new EventEmitter<number>();

  starWidth: number;

  ngOnInit(): void {
    console.log('On star component init...');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On star component changes...');
    const calculateStarWidthFromRating = rating => rating * 75 / 5;

    this.starWidth = calculateStarWidthFromRating(this.rating);
  }

  ngOnDestroy(): void {
    console.log('On star component destroy...');
  }

  onStarSelected(value: number) {
    this.changeRating.emit(value);
  }
}
