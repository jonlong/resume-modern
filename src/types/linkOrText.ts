interface OnlyText {
  text: string;
  linkText?: never;
  linkUrl?: never;
}

interface OnlyLink {
  text?: never;
  linkText: string;
  linkUrl: string;
}

export type LinkOrText = OnlyText | OnlyLink;
