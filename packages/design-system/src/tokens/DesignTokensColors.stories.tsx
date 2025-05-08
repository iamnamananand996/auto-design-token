import React, { useState } from 'react';

// Default export is required by Storybook
export default {
  title: 'Design Tokens/Colors',
  parameters: {
    docs: {
      description: {
        component: 'All available color tokens in the Auto Design system.',
      },
    },
    layout: 'padded',
  },
};

interface ColorItemProps {
  name: string;
  value: string;
  className?: string;
  cssClass?: string;
}

// Color item component
const ColorItem = ({ name, value, className = '', cssClass = '' }: ColorItemProps) => (
  <tr className="border-b border-gray-200">
    <td className="p-2 font-mono text-sm">{name}</td>
    <td className="p-2 font-mono text-sm">{value}</td>
    <td className="p-2 font-mono text-sm text-secondary">{cssClass || '-'}</td>
    <td className="p-2">
      <div className={`w-10 h-10 rounded ${className}`}></div>
    </td>
  </tr>
);

interface ColorSectionProps {
  title: string;
  colors: React.ReactNode;
}

// Color section component
const ColorSection = ({ title, colors }: ColorSectionProps) => (
  <div className="mb-8">
    <h2 className="mb-4">{title}</h2>
    <table className="w-full border-collapse">
      <thead>
        <tr className="a">
          <th className="p-2 text-left">Token Name</th>
          <th className="p-2 text-left">Hex Value</th>
          <th className="p-2 text-left">CSS Class</th>
          <th className="p-2 text-left">Preview</th>
        </tr>
      </thead>
      <tbody>{colors}</tbody>
    </table>
  </div>
);

export const AllColors = () => {
  // Base colors
  const baseColors = [
    <ColorItem
      key="primary"
      name="primary"
      value="#000000"
      cssClass="bg-auto-primary"
      className="bg-auto-primary"
    />,
    <ColorItem
      key="primaryHover"
      name="primaryHover"
      value="#101010"
      cssClass="bg-auto-primaryHover"
      className="bg-auto-primaryHover"
    />,
    <ColorItem
      key="accent"
      name="accent"
      value="#0A8DD0"
      cssClass="bg-auto-accent"
      className="bg-auto-accent"
    />,
    <ColorItem
      key="lighterAccent"
      name="lighterAccent"
      value="#90C2E7"
      cssClass="bg-auto-lighterAccent"
      className="bg-auto-lighterAccent"
    />,
    <ColorItem
      key="backgroundLight"
      name="backgroundLight"
      value="#EBEFFC"
      cssClass="bg-auto-backgroundLight"
      className="bg-auto-backgroundLight"
    />,
    <ColorItem
      key="backgroundDark"
      name="backgroundDark"
      value="#3654A6"
      cssClass="bg-auto-backgroundDark"
      className="bg-auto-backgroundDark"
    />,
    <ColorItem
      key="backgroundDarker"
      name="backgroundDarker"
      value="#27355D"
      cssClass="bg-auto-backgroundDarker"
      className="bg-auto-backgroundDarker"
    />,
    <ColorItem
      key="backgroundDarkest"
      name="backgroundDarkest"
      value="#050D26"
      cssClass="bg-auto-backgroundDarkest"
      className="bg-auto-backgroundDarkest"
    />,
    <ColorItem
      key="lightDanger"
      name="lightDanger"
      value="#ffcdd2"
      cssClass="bg-auto-lightDanger"
      className="bg-auto-lightDanger"
    />,
    <ColorItem
      key="grayButton"
      name="grayButton"
      value="#9EA49F"
      cssClass="bg-auto-grayButton"
      className="bg-auto-grayButton"
    />,
    <ColorItem
      key="lightGray"
      name="lightGray"
      value="#4E4F54"
      cssClass="bg-auto-lightGray"
      className="bg-auto-lightGray"
    />,
    <ColorItem
      key="whiteOpaque"
      name="whiteOpaque"
      value="#ffffffb3"
      cssClass="bg-auto-whiteOpaque"
      className="bg-auto-whiteOpaque"
    />,
    <ColorItem
      key="white"
      name="white"
      value="#FFFFFF"
      cssClass="bg-auto-white"
      className="bg-auto-white"
    />,
    <ColorItem
      key="black"
      name="black"
      value="#000000"
      cssClass="bg-auto-black"
      className="bg-auto-black"
    />,
  ];

  // Dark mode colors
  const darkModeColors = [
    <ColorItem
      key="darkWhite"
      name="darkWhite"
      value="#252525"
      cssClass="bg-darkWhite"
      className="bg-darkWhite"
    />,
    <ColorItem
      key="darkWhiteHover"
      name="darkWhiteHover"
      value="#353535"
      cssClass="bg-auto-darkWhiteHover"
      className="bg-auto-darkWhiteHover"
    />,
    <ColorItem
      key="darkBlack"
      name="darkBlack"
      value="#ffffff"
      cssClass="bg-auto-darkBlack"
      className="bg-auto-darkBlack"
    />,
    <ColorItem
      key="darkBlackHover"
      name="darkBlackHover"
      value="#808080"
      cssClass="bg-auto-darkBlackHover"
      className="bg-auto-darkBlackHover"
    />,
    <ColorItem
      key="darkPrimary"
      name="darkPrimary"
      value="#3654A6"
      cssClass="bg-auto-darkPrimary"
      className="bg-auto-darkPrimary"
    />,
    <ColorItem
      key="darkPrimaryHover"
      name="darkPrimaryHover"
      value="#4664B6"
      cssClass="bg-auto-darkPrimaryHover"
      className="bg-auto-darkPrimaryHover"
    />,
    <ColorItem
      key="darkAccent"
      name="darkAccent"
      value="#0A8DD0"
      cssClass="bg-auto-darkAccent"
      className="bg-auto-darkAccent"
    />,
    <ColorItem
      key="darkAccentHover"
      name="darkAccentHover"
      value="#109DD0"
      cssClass="bg-auto-darkAccentHover"
      className="bg-auto-darkAccentHover"
    />,
  ];

  // Gray colors
  const grayColors = [
    <ColorItem
      key="gray-50"
      name="gray-50"
      value="#F9FAFB"
      cssClass="bg-auto-gray-50"
      className="bg-auto-gray-50"
    />,
    <ColorItem
      key="gray-100"
      name="gray-100"
      value="#F3F4F6"
      cssClass="bg-auto-gray-100"
      className="bg-auto-gray-100"
    />,
    <ColorItem
      key="gray-200"
      name="gray-200"
      value="#E5E7EB"
      cssClass="bg-auto-gray-200"
      className="bg-auto-gray-200"
    />,
    <ColorItem
      key="gray-300"
      name="gray-300"
      value="#D1D5DB"
      cssClass="bg-auto-gray-300"
      className="bg-auto-gray-300"
    />,
    <ColorItem
      key="gray-400"
      name="gray-400"
      value="#9CA3AF"
      cssClass="bg-auto-gray-400"
      className="bg-auto-gray-400"
    />,
    <ColorItem
      key="gray-500"
      name="gray-500"
      value="#6B7280"
      cssClass="bg-auto-gray-500"
      className="bg-auto-gray-500"
    />,
    <ColorItem
      key="gray-600"
      name="gray-600"
      value="#4B5563"
      cssClass="bg-auto-gray-600"
      className="bg-auto-gray-600"
    />,
    <ColorItem
      key="gray-700"
      name="gray-700"
      value="#374151"
      cssClass="bg-auto-gray-700"
      className="bg-auto-gray-700"
    />,
    <ColorItem
      key="gray-800"
      name="gray-800"
      value="#1F2937"
      cssClass="bg-auto-gray-800"
      className="bg-auto-gray-800"
    />,
    <ColorItem
      key="gray-900"
      name="gray-900"
      value="#111827"
      cssClass="bg-auto-gray-900"
      className="bg-auto-gray-900"
    />,
  ];

  // Semantic colors
  const semanticColors = [
    <ColorItem
      key="success"
      name="success"
      value="#10B981"
      cssClass="bg-auto-success"
      className="bg-auto-success"
    />,
    <ColorItem
      key="error"
      name="error"
      value="#EF4444"
      cssClass="bg-auto-error"
      className="bg-auto-error"
    />,
    <ColorItem
      key="warning"
      name="warning"
      value="#F59E0B"
      cssClass="bg-auto-warning"
      className="bg-auto-warning"
    />,
    <ColorItem
      key="info"
      name="info"
      value="#3B82F6"
      cssClass="bg-auto-info"
      className="bg-auto-info"
    />,
  ];

  // Explorer colors
  const explorerColors = [
    <ColorItem
      key="explorer-grayDark"
      name="explorer-grayDark"
      value="#2A2C38"
      cssClass="bg-auto-explorer-grayDark"
      className="bg-auto-explorer-grayDark"
    />,
    <ColorItem
      key="explorer-grayDarker"
      name="explorer-grayDarker"
      value="#27355D"
      cssClass="bg-auto-explorer-grayDarker"
      className="bg-auto-explorer-grayDarker"
    />,
    <ColorItem
      key="explorer-grayLight"
      name="explorer-grayLight"
      value="#EBEFFC"
      cssClass="bg-auto-explorer-grayLight"
      className="bg-auto-explorer-grayLight"
    />,
    <ColorItem
      key="explorer-gradientFrom"
      name="explorer-gradientFrom"
      value="#032372"
      cssClass="bg-auto-explorer-gradientFrom"
      className="bg-auto-explorer-gradientFrom"
    />,
    <ColorItem
      key="explorer-gradientVia"
      name="explorer-gradientVia"
      value="#1949D2"
      cssClass="bg-auto-explorer-gradientVia"
      className="bg-auto-explorer-gradientVia"
    />,
    <ColorItem
      key="explorer-gradientTo"
      name="explorer-gradientTo"
      value="#5373C4"
      cssClass="bg-auto-explorer-gradientTo"
      className="bg-auto-explorer-gradientTo"
    />,
    <ColorItem
      key="explorer-gradientToSecondary"
      name="explorer-gradientToSecondary"
      value="#0C1C43"
      cssClass="bg-auto-explorer-gradientToSecondary"
      className="bg-auto-explorer-gradientToSecondary"
    />,
    <ColorItem
      key="explorer-white"
      name="explorer-white"
      value="#FFFFFF"
      cssClass="bg-auto-explorer-white"
      className="bg-auto-explorer-white"
    />,
    <ColorItem
      key="explorer-whiteTransparent"
      name="explorer-whiteTransparent"
      value="#ffffff1a"
      cssClass="bg-auto-explorer-whiteTransparent"
      className="bg-auto-explorer-whiteTransparent"
    />,
    <ColorItem
      key="explorer-whiteOpaque"
      name="explorer-whiteOpaque"
      value="#ffffffb3"
      cssClass="bg-auto-explorer-whiteOpaque"
      className="bg-auto-explorer-whiteOpaque"
    />,
    <ColorItem
      key="explorer-pastelPurple"
      name="explorer-pastelPurple"
      value="#C2B0EE"
      cssClass="bg-auto-explorer-pastelPurple"
      className="bg-auto-explorer-pastelPurple"
    />,
    <ColorItem
      key="explorer-pastelBlue"
      name="explorer-pastelBlue"
      value="#ABCFEF"
      cssClass="bg-auto-explorer-pastelBlue"
      className="bg-auto-explorer-pastelBlue"
    />,
    <ColorItem
      key="explorer-pastelPink"
      name="explorer-pastelPink"
      value="#E6ADDC"
      cssClass="bg-auto-explorer-pastelPink"
      className="bg-auto-explorer-pastelPink"
    />,
    <ColorItem
      key="explorer-pastelGreen"
      name="explorer-pastelGreen"
      value="#91D3A0"
      cssClass="bg-auto-explorer-pastelGreen"
      className="bg-auto-explorer-pastelGreen"
    />,
    <ColorItem
      key="explorer-greenBright"
      name="explorer-greenBright"
      value="#37D058"
      cssClass="bg-auto-explorer-greenBright"
      className="bg-auto-explorer-greenBright"
    />,
    <ColorItem
      key="explorer-primaryAccent"
      name="explorer-primaryAccent"
      value="#1949D2"
      cssClass="bg-auto-explorer-primaryAccent"
      className="bg-auto-explorer-primaryAccent"
    />,
    <ColorItem
      key="explorer-blueAccent"
      name="explorer-blueAccent"
      value="#1E254E"
      cssClass="bg-auto-explorer-blueAccent"
      className="bg-auto-explorer-blueAccent"
    />,
    <ColorItem
      key="explorer-blueDarkAccent"
      name="explorer-blueDarkAccent"
      value="#2A345E"
      cssClass="bg-auto-explorer-blueDarkAccent"
      className="bg-auto-explorer-blueDarkAccent"
    />,
    <ColorItem
      key="explorer-blueLight"
      name="explorer-blueLight"
      value="#EBEFFC"
      cssClass="bg-auto-explorer-blueLight"
      className="bg-auto-explorer-blueLight"
    />,
    <ColorItem
      key="explorer-blueShade"
      name="explorer-blueShade"
      value="#3654A6"
      cssClass="bg-auto-explorer-blueShade"
      className="bg-auto-explorer-blueShade"
    />,
    <ColorItem
      key="explorer-blueUndertone"
      name="explorer-blueUndertone"
      value="#27355D"
      cssClass="bg-auto-explorer-blueUndertone"
      className="bg-auto-explorer-blueUndertone"
    />,
    <ColorItem
      key="explorer-backgroundLight"
      name="explorer-backgroundLight"
      value="#EBEFFC"
      cssClass="bg-auto-explorer-backgroundLight"
      className="bg-auto-explorer-backgroundLight"
    />,
    <ColorItem
      key="explorer-backgroundDark"
      name="explorer-backgroundDark"
      value="#3654A6"
      cssClass="bg-auto-explorer-backgroundDark"
      className="bg-auto-explorer-backgroundDark"
    />,
    <ColorItem
      key="explorer-backgroundDarker"
      name="explorer-backgroundDarker"
      value="#27355D"
      cssClass="bg-auto-explorer-backgroundDarker"
      className="bg-auto-explorer-backgroundDarker"
    />,
    <ColorItem
      key="explorer-backgroundDarkest"
      name="explorer-backgroundDarkest"
      value="#050D26"
      cssClass="bg-auto-explorer-backgroundDarkest"
      className="bg-auto-explorer-backgroundDarkest"
    />,
    <ColorItem
      key="explorer-boxLight"
      name="explorer-boxLight"
      value="#FFFFFF"
      cssClass="bg-auto-explorer-boxLight"
      className="bg-auto-explorer-boxLight"
    />,
    <ColorItem
      key="explorer-boxDark"
      name="explorer-boxDark"
      value="#2A2C38"
      cssClass="bg-auto-explorer-boxDark"
      className="bg-auto-explorer-boxDark"
    />,
    <ColorItem
      key="explorer-buttonLightFrom"
      name="explorer-buttonLightFrom"
      value="#032372"
      cssClass="bg-auto-explorer-buttonLightFrom"
      className="bg-auto-explorer-buttonLightFrom"
    />,
    <ColorItem
      key="explorer-buttonLightTo"
      name="explorer-buttonLightTo"
      value="#5373C4"
      cssClass="bg-auto-explorer-buttonLightTo"
      className="bg-auto-explorer-buttonLightTo"
    />,
    <ColorItem
      key="explorer-buttonDarkFrom"
      name="explorer-buttonDarkFrom"
      value="#1949D2"
      cssClass="bg-auto-explorer-buttonDarkFrom"
      className="bg-auto-explorer-buttonDarkFrom"
    />,
    <ColorItem
      key="explorer-buttonDarkTo"
      name="explorer-buttonDarkTo"
      value="#0C1C43"
      cssClass="bg-auto-explorer-buttonDarkTo"
      className="bg-auto-explorer-buttonDarkTo"
    />,
    <ColorItem
      key="explorer-headerLight"
      name="explorer-headerLight"
      value="#FFFFFF"
      cssClass="bg-auto-explorer-headerLight"
      className="bg-auto-explorer-headerLight"
    />,
    <ColorItem
      key="explorer-headerDark"
      name="explorer-headerDark"
      value="#2A2C38"
      cssClass="bg-auto-explorer-headerDark"
      className="bg-auto-explorer-headerDark"
    />,
    <ColorItem
      key="explorer-footerLight"
      name="explorer-footerLight"
      value="#032372"
      cssClass="bg-auto-explorer-footerLight"
      className="bg-auto-explorer-footerLight"
    />,
    <ColorItem
      key="explorer-footerDark"
      name="explorer-footerDark"
      value="#08183E"
      cssClass="bg-auto-explorer-footerDark"
      className="bg-auto-explorer-footerDark"
    />,
  ];

  // Gradient classes
  const gradientClasses = [
    { name: 'bg-auto-explorer-gradient-dark', label: 'Explorer Dark Background Gradient' },
    { name: 'bg-auto-explorer-gradient-light', label: 'Explorer Light Background Gradient' },
    { name: 'bg-auto-explorer-button-gradient-light', label: 'Explorer Light Button Gradient' },
    { name: 'bg-auto-explorer-button-gradient-dark', label: 'Explorer Dark Button Gradient' },
    { name: 'bg-auto-explorer-card-gradient-primary', label: 'Explorer Primary Card Gradient' },
    { name: 'bg-auto-explorer-card-gradient-secondary', label: 'Explorer Secondary Card Gradient' },
  ];

  return (
    <div className="auto-m-4">
      <h1 className="auto-heading-1 auto-mb-8">Auto Design Tokens - Colors</h1>

      <ColorSection title="Base Colors" colors={baseColors} />
      <ColorSection title="Dark Mode Colors" colors={darkModeColors} />
      <ColorSection title="Gray Scale" colors={grayColors} />
      <ColorSection title="Semantic Colors" colors={semanticColors} />
      <ColorSection title="Explorer Colors" colors={explorerColors} />

      <div className="auto-mt-12">
        <h2 className="auto-heading-2 auto-mb-4">Gradient Classes</h2>
        <table className="auto-w-full auto-border-collapse auto-mb-8">
          <thead>
            <tr className="a">
              <th className="auto-p-2 auto-text-left">CSS Class</th>
              <th className="auto-p-2 auto-text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {gradientClasses.map((gradient) => (
              <tr key={gradient.name} className="auto-border-b auto-border-gray-200">
                <td className="auto-p-2 auto-font-mono auto-text-sm">{gradient.name}</td>
                <td className="auto-p-2">{gradient.label}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="auto-grid auto-grid-cols-1 auto-md:grid-cols-2 auto-lg:grid-cols-3 auto-gap-4">
          <div className="auto-p-6 auto-rounded auto-h-32 auto-explorer-bg-gradient-dark auto-flex auto-items-center auto-justify-center">
            <span className="auto-text-white">auto-explorer-bg-gradient-dark</span>
          </div>
          <div className="auto-p-6 auto-rounded auto-h-32 auto-explorer-bg-gradient-light auto-flex auto-items-center auto-justify-center">
            <span className="auto-text-white">auto-explorer-bg-gradient-light</span>
          </div>
          <div className="auto-p-6 auto-rounded auto-h-32 auto-explorer-button-gradient-light auto-flex auto-items-center auto-justify-center">
            <span className="auto-text-white">auto-explorer-button-gradient-light</span>
          </div>
          <div className="auto-p-6 auto-rounded auto-h-32 auto-explorer-button-gradient-dark auto-flex auto-items-center auto-justify-center">
            <span className="auto-text-white">auto-explorer-button-gradient-dark</span>
          </div>
          <div className="auto-p-6 auto-rounded auto-h-32 auto-explorer-card-gradient-primary auto-flex auto-items-center auto-justify-center">
            <span className="auto-text-white">auto-explorer-card-gradient-primary</span>
          </div>
          <div className="auto-p-6 auto-rounded auto-h-32 auto-explorer-card-gradient-secondary auto-flex auto-items-center auto-justify-center">
            <span className="auto-text-white">auto-explorer-card-gradient-secondary</span>
          </div>
        </div>
      </div>
    </div>
  );
};
