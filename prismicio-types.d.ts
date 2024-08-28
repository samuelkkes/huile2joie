// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *External link → Item*
 */
export interface ExternalLinkDocumentDataItemItem {
  /**
   * Label field in *External link → Item*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: external_link.item[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *External link → Item*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: external_link.item[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for External link documents
 */
interface ExternalLinkDocumentData {
  /**
   * Item field in *External link*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: external_link.item[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  item: prismic.GroupField<Simplify<ExternalLinkDocumentDataItemItem>>;
}

/**
 * External link document from Prismic
 *
 * - **API ID**: `external_link`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ExternalLinkDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ExternalLinkDocumentData>,
    "external_link",
    Lang
  >;

type PageDocumentDataSlicesSlice = HeroSlice | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Content for publication documents
 */
interface PublicationDocumentData {
  /**
   * Titre field in *publication*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: publication.titre
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  titre: prismic.TitleField;

  /**
   * Description field in *publication*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: publication.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Date field in *publication*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: publication.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * Image field in *publication*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: publication.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Contenue field in *publication*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: publication.contenue
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  contenue: prismic.RichTextField;
}

/**
 * publication document from Prismic
 *
 * - **API ID**: `publication`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PublicationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<PublicationDocumentData>,
    "publication",
    Lang
  >;

export type AllDocumentTypes =
  | ExternalLinkDocument
  | PageDocument
  | PublicationDocument;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Titre field in *Hero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.titre
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  titre: prismic.TitleField;

  /**
   * Sous titre field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.sous_titre
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sous_titre: prismic.RichTextField;

  /**
   * Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → Hero with copyright image → Primary*
 */
export interface HeroSliceHeroWithCopyrightImagePrimary {
  /**
   * Titre field in *Hero → Hero with copyright image → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithCopyrightImage.primary.titre
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  titre: prismic.TitleField;

  /**
   * Sous titre field in *Hero → Hero with copyright image → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithCopyrightImage.primary.sous_titre
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sous_titre: prismic.RichTextField;

  /**
   * Image field in *Hero → Hero with copyright image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithCopyrightImage.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Auteur image field in *Hero → Hero with copyright image → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithCopyrightImage.primary.auteur_image
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  auteur_image: prismic.KeyTextField;

  /**
   * Lien vers auteur field in *Hero → Hero with copyright image → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithCopyrightImage.primary.lien_vers_auteur
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  lien_vers_auteur: prismic.LinkField;

  /**
   * Lien vers image field in *Hero → Hero with copyright image → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.heroWithCopyrightImage.primary.lien_vers_image
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  lien_vers_image: prismic.LinkField;
}

/**
 * Hero with copyright image variation for Hero Slice
 *
 * - **API ID**: `heroWithCopyrightImage`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceHeroWithCopyrightImage = prismic.SharedSliceVariation<
  "heroWithCopyrightImage",
  Simplify<HeroSliceHeroWithCopyrightImagePrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceHeroWithCopyrightImage;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ExternalLinkDocument,
      ExternalLinkDocumentData,
      ExternalLinkDocumentDataItemItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PublicationDocument,
      PublicationDocumentData,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceHeroWithCopyrightImagePrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceHeroWithCopyrightImage,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
    };
  }
}
