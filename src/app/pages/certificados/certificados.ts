import { Component, OnInit } from '@angular/core';
import { ItemCertificado } from "../../_components/item-certificado/item-certificado";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado.service';
import { CertificadoInterface } from '../../interfaces/certificado-interface';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado, SecondaryButton, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados implements OnInit {

  certificados: CertificadoInterface[] = [];

  constructor(private certitifcadoService: CertificadoService) { }

  ngOnInit(): void {
    this.certificados = this.certitifcadoService.certificados;
    }
}
