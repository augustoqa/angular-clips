import { Component, Input } from '@angular/core'
import { ModalService } from '../../services/modal.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() modalID = ''

  constructor(public modal: ModalService) {
  }

  closeModal() {
    this.modal.toggleModal(this.modalID)
  }
}
