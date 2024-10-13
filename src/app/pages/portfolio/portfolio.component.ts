import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = [ 
{
  title: 'Blockchain Application ',
  description: 'A digital identity system',
  image: 'images/project1.jpeg',
  link: 'https;//decentralized-identity-with-xrp-wallet-ojsmhoveu.vercel.app/',
},

{
title: 'Blockchain Application ',
description: 'A token curated registry',
image: 'images/project2.jpeg',
link: 'https;//solar-renewable-token-curated-registry-f6ha.vercel.app/#',

}
  ];
}