
import { defineConfig } from 'astro/config';
import { create } from 'astro-spaceship';

import websiteConfig from './website.config.json';

export default defineConfig(create(websiteConfig));