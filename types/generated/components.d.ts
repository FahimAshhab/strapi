import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionViews extends Schema.Component {
  collectionName: 'components_section_views';
  info: {
    displayName: 'Views';
    icon: 'clock';
  };
  attributes: {
    Views: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.views': SectionViews;
    }
  }
}
