#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Asset Generation Helper
 * 
 * This script helps generate placeholder images for OG and PWA support.
 * For production, replace these with professionally designed assets.
 * 
 * Usage: node scripts/generate-assets.js
 */

const fs = require('fs');
const path = require('path');

// Colors
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkAssets() {
  const publicDir = path.join(process.cwd(), 'public');
  const requiredAssets = [
    { file: 'og-image.png', size: '1200x630', purpose: 'Open Graph social preview' },
    { file: 'favicon.ico', size: '32x32', purpose: 'Browser tab icon' },
    { file: 'icon-192.png', size: '192x192', purpose: 'PWA icon (small)' },
    { file: 'icon-512.png', size: '512x512', purpose: 'PWA icon (large)' },
  ];

  log('\n📸 Checking Asset Status\n', 'bright');

  let allExist = true;

  requiredAssets.forEach(asset => {
    const filePath = path.join(publicDir, asset.file);
    const exists = fs.existsSync(filePath);
    
    if (exists) {
      log(`✓ ${asset.file} - ${asset.purpose}`, 'green');
    } else {
      log(`✗ ${asset.file} - ${asset.purpose} (MISSING)`, 'red');
      allExist = false;
    }
  });

  if (!allExist) {
    log('\n⚠️  Missing Assets Detected\n', 'yellow');
    log('Generate assets using one of these methods:\n', 'bright');
    log('1. Online Tools:', 'blue');
    log('   • OG Image: https://www.canva.com (search "Open Graph")');
    log('   • Favicon: https://favicon.io/favicon-generator/');
    log('   • Icons: https://realfavicongenerator.net\n');
    log('2. Placeholder Generator:', 'blue');
    log('   • OG Image: https://placehold.co/1200x630/000000/FFFFFF/png?text=Mohd+Saqib+Khan');
    log('   • Icons: https://placehold.co/512x512/000000/FFFFFF/png?text=MSK\n');
    log('3. Read ASSETS.md for detailed instructions\n');
    log('After creating assets, place them in the /public folder.\n');
  } else {
    log('\n✅ All required assets are present!\n', 'green');
    log('Next steps:', 'bright');
    log('1. Verify image quality and dimensions');
    log('2. Test OG image: https://www.opengraph.xyz');
    log('3. Optimize images: https://tinypng.com\n');
  }

  return allExist;
}

function generatePlaceholderInfo() {
  log('\n📋 Placeholder URLs\n', 'bright');
  log('Copy these URLs to download placeholders:\n');
  
  const placeholders = [
    {
      name: 'OG Image (1200x630)',
      url: 'https://placehold.co/1200x630/000000/FFFFFF/png?text=Mohd+Saqib+Khan&font=inter',
      saveas: 'og-image.png'
    },
    {
      name: 'Icon 512x512',
      url: 'https://placehold.co/512x512/000000/FFFFFF/png?text=MSK&font=inter',
      saveas: 'icon-512.png'
    },
    {
      name: 'Icon 192x192',
      url: 'https://placehold.co/192x192/000000/FFFFFF/png?text=MSK&font=inter',
      saveas: 'icon-192.png'
    }
  ];

  placeholders.forEach(p => {
    log(`${p.name}:`, 'yellow');
    log(`  ${p.url}`);
    log(`  Save as: public/${p.saveas}\n`);
  });

  log('Note: For favicon.ico, use https://favicon.io/favicon-generator/\n', 'blue');
}

function main() {
  log('\n='.repeat(60), 'bright');
  log('  Asset Generator - Mohd Saqib Khan Portfolio  ', 'bright');
  log('='.repeat(60) + '\n', 'bright');

  const allExist = checkAssets();
  
  if (!allExist) {
    generatePlaceholderInfo();
  }

  log('For detailed asset creation guide, see ASSETS.md\n', 'blue');
}

// Run the script
main();
