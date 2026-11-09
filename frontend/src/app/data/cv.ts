/**
 * Tout le contenu du portfolio, repris du CV (version novembre 2026) et des dépôts GitHub.
 *
 * Pour mettre à jour le site : modifier ce fichier, remplacer le PDF dans `public/cv/`
 * et relancer `npm run build`. Aucun backend n'est nécessaire.
 */

export interface Experience {
  role: string;
  company: string;
  via?: string;
  location: string;
  period: string;
  kind: string;
  current?: boolean;
  summary: string;
  tasks: string[];
  tags: string[];
}

export interface Project {
  title: string;
  period: string;
  kind: 'Projet personnel' | 'Projet académique';
  description: string;
  tags: string[];
  github?: string;
  icon: 'phone' | 'web' | 'wifi' | 'cart';
}

export interface Education {
  title: string;
  school: string;
  period: string;
  detail?: string;
  current?: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  detail: string;
  /** Certificat, Badge, Examen… */
  kind: string;
  date?: string;
}

export interface SkillGroup {
  label: string;
  icon: 'network' | 'server' | 'headset' | 'tools' | 'code';
  items: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: 'headset' | 'server' | 'network' | 'code';
}

export interface Article {
  title: string;
  source: string;
  date: string;
  image: string;
  link: string;
}

export const CV = {
  /** PDF servi depuis le dossier public/. */
  file: 'cv/CV-Kolawole-Adams-Christian.pdf',

  firstName: 'Kolawole',
  fullName: "Kolawole Adam's Christian",
  legalName: "Kolawole Adam's Christian Parthène",
  title: 'Support informatique, systèmes et réseaux',
  tagline: 'Support utilisateurs N1/N2 · Active Directory & Microsoft 365 · Réseaux Cisco / Huawei · VoIP',

  bio: [
    "Diplômé de l'Institut Ivoirien de Technologie en réseaux et télécommunications, j'occupe actuellement un " +
      "poste de support informatique chez DP World Côte d'Ivoire, où j'ai acquis une expérience pratique de " +
      "l'assistance aux utilisateurs en entreprise.",
    "Ma passion pour l'informatique, alliée à mon sens de l'objectivité et à ma détermination, constitue le " +
      'fondement de mon engagement professionnel.',
  ],

  photo: 'assets/img/kolawole-adams.png',
  email: 'kolawolechristianpatherne@gmail.com',
  phone: '+225 01 05 38 14 14',
  location: "Grand-Bassam (Modeste), Côte d'Ivoire",
  linkedin: 'https://www.linkedin.com/in/kolawole-adams-christian-a84642396/',
  github: 'https://github.com/theblit',

  /**
   * Identifiant Formspree (https://formspree.io) pour recevoir les messages du formulaire.
   * Tant qu'il est vide, le formulaire ouvre le client mail du visiteur avec le message pré-rempli.
   */
  formspreeId: '',

  languages: [
    { name: 'Français', level: 'Langue maternelle' },
    { name: 'Anglais', level: 'Technique et professionnel' },
  ],

  experiences: <Experience[]>[
    {
      role: 'Technicien support informatique',
      company: "DP World Côte d'Ivoire",
      via: 'Market Access Consumer Ivory Coast (MACI)',
      location: "Abidjan, Côte d'Ivoire",
      period: '2026 — aujourd’hui',
      kind: 'Stage académique',
      current: true,
      summary:
        'Support technique de premier et de second niveau auprès des collaborateurs, administration des ' +
        'comptes et du parc informatique.',
      tasks: [
        'Diagnostic et résolution des incidents matériels, logiciels, réseau et connectivité',
        'Installation, configuration et maintenance des postes, portables, imprimantes et périphériques',
        'Gestion des comptes, autorisations et droits d’accès via Active Directory et Microsoft 365',
        'Support Microsoft Teams, Outlook et suite Office',
        'Suivi du parc informatique et des inventaires',
        'Escalade des incidents complexes et suivi jusqu’à résolution',
        'Conseil aux utilisateurs sur les bonnes pratiques',
        'Participation à la maintenance du réseau et à l’amélioration de l’infrastructure',
      ],
      tags: ['Active Directory', 'Microsoft 365', 'Teams', 'Outlook', 'Ticketing', 'Réseau'],
    },
  ],

  projects: <Project[]>[
    {
      title: 'Serveur VoIP Asterisk',
      period: '2024 – 2025',
      kind: 'Projet personnel',
      description:
        'Mise en place d’un serveur de téléphonie IP entièrement fonctionnel avec Asterisk sur Ubuntu Server ' +
        '24.04 : comptes SIP, plan de numérotation, tests d’appels entre softphones.',
      tags: ['Asterisk', 'Ubuntu Server 24.04', 'SIP', 'VoIP', 'Linux'],
      github: 'https://github.com/theblit/Asterisk_manager',
      icon: 'phone',
    },
    {
      title: 'Digitalisation d’une PME locale',
      period: '2025 – 2026',
      kind: 'Projet académique',
      description:
        'Application web Python / Django pour digitaliser les opérations quotidiennes d’une entreprise de vente ' +
        'de matériel de construction : produits, stocks, ventes et suivi d’activité.',
      tags: ['Python', 'Django', 'HTML', 'CSS', 'SQLite'],
      github: 'https://github.com/theblit/projet-Digitalisation-pme-locale',
      icon: 'web',
    },
    {
      title: 'Réseau WLAN d’entreprise sur eNSP',
      period: '2025 – 2026',
      kind: 'Projet académique',
      description:
        'Modélisation complète d’un réseau sans fil d’entreprise sur Huawei eNSP : contrôleur Wi-Fi, points ' +
        'd’accès, VLAN, adressage et sécurisation des accès.',
      tags: ['Huawei eNSP', 'WLAN', 'VLAN', 'DHCP', 'Sécurité Wi-Fi'],
      icon: 'wifi',
    },
    {
      title: 'Site e-commerce',
      period: '2025',
      kind: 'Projet académique',
      description:
        'Conception d’un site web e-commerce : catalogue produits, panier et pages de présentation, en HTML, ' +
        'CSS et JavaScript.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/theblit/E-commerce-',
      icon: 'cart',
    },
  ],

  education: <Education[]>[
    {
      title: 'Diplôme en réseaux et télécommunications',
      school: 'Institut Ivoirien de Technologie (IIT), Grand-Bassam',
      period: '2025 – 2026',
      detail: 'Administration réseau, systèmes et développement web pour PME.',
      current: true,
    },
    {
      title: 'Réseaux informatiques et télécommunications (2e année)',
      school: 'UTT-LOKO',
      period: '2024 – 2025',
    },
    {
      title: 'Informatique générale (1re année)',
      school: 'Emmaus University',
      period: '2022 – 2023',
    },
    {
      title: 'Baccalauréat série D',
      school: 'Collège Catholique Saint Jean Bosco de Treichville',
      period: '2021 – 2022',
    },
  ],

  certifications: <Certification[]>[
    {
      title: 'Networking Academy Learn-A-Thon 2026',
      issuer: 'Cisco Networking Academy',
      kind: 'Badge',
      date: 'Mars 2026',
      detail: 'Participation à un Learn-A-Thon organisé par une Networking Academy locale.',
    },
    {
      title: 'Computer Hardware Basics',
      issuer: 'Cisco Networking Academy',
      kind: 'Certificat et badge',
      date: 'Février 2026',
      detail: 'Composants d’un ordinateur, assemblage, ordinateurs portables, dépannage matériel de base.',
    },
    {
      title: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      kind: 'Certificat et badge',
      date: 'Février 2026',
      detail: 'Fondamentaux des réseaux : protocole Internet, accès réseau, adressage, services réseau.',
    },
    {
      title: 'Network Technician Career Path — examen',
      issuer: 'Cisco Networking Academy',
      kind: 'Examen réussi, badge vérifié',
      date: 'Février 2026',
      detail: 'Validation des compétences de technicien réseau du parcours Cisco.',
    },
    {
      title: 'HCIA-Datacom V1.0 (préparation)',
      issuer: 'Huawei',
      kind: 'Formation',
      detail: 'Routage et commutation, VLAN, WLAN, STP, OSPF : les fondamentaux des réseaux d’entreprise Huawei.',
    },
    {
      title: 'General Knowledge of Computer Network',
      issuer: 'Huawei',
      kind: 'Certification',
      detail: 'Modèles OSI et TCP/IP, adressage IP, topologies et équipements réseau.',
    },
  ],

  skillGroups: <SkillGroup[]>[
    {
      label: 'Réseaux informatiques',
      icon: 'network',
      items: ['TCP/IP', 'DNS', 'DHCP', 'VLAN', 'VPN', 'Routage & commutation', 'Wi-Fi', 'NAT', 'OSPF'],
    },
    {
      label: 'Systèmes & administration',
      icon: 'server',
      items: [
        'Windows 10/11',
        'Windows Server',
        'Active Directory',
        'Microsoft 365',
        'Gestion des comptes',
        'Serveur Linux (Ubuntu, Debian)',
      ],
    },
    {
      label: 'Support informatique',
      icon: 'headset',
      items: [
        'Assistance N1/N2',
        'Gestion des incidents',
        'Dépannage matériel & logiciel',
        'Assistance à distance',
        'Formation des utilisateurs',
        'Gestion du parc',
      ],
    },
    {
      label: 'Outils & plateformes',
      icon: 'tools',
      items: [
        'Microsoft Office',
        'Teams',
        'Outlook',
        'TeamViewer',
        'AnyDesk',
        'Service Desk / Ticketing',
        'Huawei eNSP',
        'Cisco Packet Tracer',
        'EVE-NG',
      ],
    },
    {
      label: 'Développement web',
      icon: 'code',
      items: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'Flask', 'Git'],
    },
  ],

  softSkills: [
    'Communication',
    'Patience et empathie',
    'Résolution de problèmes',
    'Travail d’équipe',
    'Leadership',
    'Adaptabilité',
  ],

  services: <Service[]>[
    {
      title: 'Support utilisateurs',
      icon: 'headset',
      description:
        'Assistance de premier et second niveau, dépannage matériel et logiciel, prise en main à distance, ' +
        'formation des utilisateurs et suivi des tickets jusqu’à résolution.',
    },
    {
      title: 'Administration systèmes',
      icon: 'server',
      description:
        'Gestion des comptes et des droits dans Active Directory et Microsoft 365, déploiement et maintenance ' +
        'des postes, suivi du parc et des inventaires.',
    },
    {
      title: 'Réseaux & VoIP',
      icon: 'network',
      description:
        'Conception de topologies (Cisco, Huawei), VLAN, Wi-Fi d’entreprise, dépannage de connectivité et ' +
        'mise en place de téléphonie IP avec Asterisk.',
    },
    {
      title: 'Sites web pour PME',
      icon: 'code',
      description:
        'Sites vitrines et petites applications métier en HTML, CSS, JavaScript, Python et Django pour ' +
        'digitaliser l’activité d’une petite entreprise.',
    },
  ],

  articles: <Article[]>[
    {
      title: 'Cloud computing : tendances et marché',
      source: 'IDC',
      date: 'Février 2026',
      image: 'assets/img/cloud-computing.png',
      link: 'https://hk.investing.com/news/stock-market-news/article-1309682',
    },
    {
      title: 'Transition vers l’IPv6 : un tournant décisif',
      source: 'SIDN',
      date: 'Février 2026',
      image: 'assets/img/ipv6.png',
      link: 'https://www.sidn.nl/en/news-and-blogs/tipping-point-reached-transition-to-ipv6-enters-a-new-phase',
    },
    {
      title: 'Top 5 des tendances cybersécurité 2026',
      source: 'INE Security',
      date: 'Janvier 2026',
      image: 'assets/img/cybersecurity.png',
      link: 'https://ine.com/newsroom/ine-releases-top-5-cybersecurity-trends-of-2026',
    },
  ],
};
