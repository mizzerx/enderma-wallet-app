/**
 * @format
 */

import React from 'react';
import {SvgXml} from 'react-native-svg';

interface SvgXmlImageProps {
  xml: string;
  width?: number;
  height?: number;
  color?: string;
}

const SvgXmlImage: React.FC<SvgXmlImageProps> = props => {
  const {xml, width, height, color} = props;

  const getXml = () => {
    let xmlString = xml.replace(/\n/g, '');

    if (width) {
      // Find the <svg> tag and replace the width attribute
      const svgTag = xmlString.match(/<svg[^>]*>/);
      if (svgTag) {
        const svgTagString = svgTag[0];
        const svgTagWithoutWidth = svgTagString.replace(
          /width="[^"]*"/,
          `width="${width}"`,
        );
        xmlString = xmlString.replace(svgTagString, svgTagWithoutWidth);
      }
    }

    if (height) {
      // Find the <svg> tag and replace the height attribute
      const svgTag = xmlString.match(/<svg[^>]*>/);
      if (svgTag) {
        const svgTagString = svgTag[0];
        const svgTagWithoutHeight = svgTagString.replace(
          /height="[^"]*"/,
          `height="${height}"`,
        );
        xmlString = xmlString.replace(svgTagString, svgTagWithoutHeight);
      }
    }

    if (color) {
      // Find the <svg> tag and replace the fill attribute
      const svgTag = xmlString.match(/<svg[^>]*>/);
      if (svgTag) {
        const svgTagString = svgTag[0];
        const svgTagWithoutColor = svgTagString.replace(
          /fill="[^"]*"/,
          `fill="${color}"`,
        );
        xmlString = xmlString.replace(svgTagString, svgTagWithoutColor);
      }
    }

    return xmlString;
  };

  return <SvgXml xml={getXml()} />;
};

export default SvgXmlImage;
