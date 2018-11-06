export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  facebook: string;
  twitter: string;
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
  facebook: 'https://www.facebook.com/abezek1',
  twitter: 'https://twitter.com/alex_bezek',
  showSubscribe: true,
  mailchimpAction: 'TODO',
  mailchimpName: 'TODO',
};

export default config;
