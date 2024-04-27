import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutContact extends Schema.Component {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'Contact';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    FirstName: Attribute.String;
    LastName: Attribute.String;
    email: Attribute.Email;
    Street: Attribute.String;
    PostCode: Attribute.String;
    City: Attribute.String;
    Telefon: Attribute.String;
  };
}

export interface LayoutLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
  };
}

export interface LayoutNavBar extends Schema.Component {
  collectionName: 'components_layout_nav_bars';
  info: {
    displayName: 'NavBar';
    icon: 'pinMap';
    description: '';
  };
  attributes: {
    Links: Attribute.Component<'layout.link', true>;
    SocialLinks: Attribute.Component<'layout.social-link', true>;
    ImprintLink: Attribute.Component<'layout.link'>;
    DataProtectionLink: Attribute.Component<'layout.link'>;
  };
}

export interface LayoutSocialLink extends Schema.Component {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    Icon: Attribute.Enumeration<['instagram', 'facebook', 'youtube']> &
      Attribute.Required;
  };
}

export interface PageHeroImage extends Schema.Component {
  collectionName: 'components_layout_hero_images';
  info: {
    displayName: 'HeroImage';
    icon: 'layout';
    description: '';
  };
  attributes: {
    Image: Attribute.Component<'page.media'>;
  };
}

export interface PageMarkdown extends Schema.Component {
  collectionName: 'components_shared_markdowns';
  info: {
    displayName: 'Text';
    icon: 'feather';
    description: '';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface PageMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    File: Attribute.Media;
    Title: Attribute.String & Attribute.Private;
  };
}

export interface PageMosaicImageGallery extends Schema.Component {
  collectionName: 'components_layout_mosaic_image_galleries';
  info: {
    displayName: 'MosaicImageGallery';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Images: Attribute.Component<'page.media', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.contact': LayoutContact;
      'layout.link': LayoutLink;
      'layout.nav-bar': LayoutNavBar;
      'layout.social-link': LayoutSocialLink;
      'page.hero-image': PageHeroImage;
      'page.markdown': PageMarkdown;
      'page.media': PageMedia;
      'page.mosaic-image-gallery': PageMosaicImageGallery;
    }
  }
}
