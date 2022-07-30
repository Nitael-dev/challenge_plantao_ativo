import React from 'react';

export interface TypographProps {
  fontWeight?: 'Regular' | 'Medium';
  fontSize?: number;
  color?: 'text' | 'text_detail' | 'title';
  lineHeight?: 'small' | 'medium' | 'high' | 'extra_high';
  children?: React.ReactNode;
}