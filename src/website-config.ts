export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  githubUrl: string;
  twitter: string;
  linkedInUrl: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
}

const config: WebsiteConfig = {
  title: "Alex Bezek's Blog",
  description: "Alex Bezek's Blog",
  coverImage: 'img/blog-cover.jpg',
  logo: 'img/ghost-logo.png',
  siteUrl: 'https://alexbezek.io',
  githubUrl: 'https://github.com/alex-bezek',
  twitter: 'https://twitter.com/alex_bezek',
  linkedInUrl: 'https://www.linkedin.com/in/alexander-bezek-b1993b100',
  showSubscribe: true,
  mailchimpAction: 'https://alexbezek.us20.list-manage.com/subscribe/post?u=7564e4a4c6c623a8c709acec8&amp;id=2d7a6cf84a',
  mailchimpName: 'b_7564e4a4c6c623a8c709acec8_2d7a6cf84a',
};

export default config;
