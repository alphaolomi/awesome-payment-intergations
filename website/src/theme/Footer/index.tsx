import React, {type ReactNode} from 'react';
import Footer from '@theme-original/Footer';
import type FooterType from '@theme/Footer';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  return (
    <>
      <Footer {...props} />
      <div
        style={{
          textAlign: 'center',
          padding: '0.75rem 1rem',
          fontSize: '0.875rem',
          borderTop: '1px solid var(--ifm-toc-border-color)',
          color: 'var(--ifm-color-emphasis-700)',
          backgroundColor: 'var(--ifm-footer-background-color)',
        }}>
        Catalogue is powered by structured YAML records under <code>data/</code>.
      </div>
    </>
  );
}
