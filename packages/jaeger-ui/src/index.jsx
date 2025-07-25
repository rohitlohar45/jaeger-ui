// Copyright (c) 2017 Uber Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// site-prefix.js must be the first import of the main webpack entrypoint
// because it configures the webpack publicPath.

import './site-prefix';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CompatRouter } from 'react-router-dom-v5-compat';
import { createRoot } from 'react-dom/client';

import JaegerUIApp from './components/App';
import { context as trackingContext } from './utils/tracking';

// these need to go after the App import

import 'u-basscss/css/flexbox.css';
import 'u-basscss/css/layout.css';
import 'u-basscss/css/margin.css';
import 'u-basscss/css/padding.css';
import 'u-basscss/css/position.css';
import 'u-basscss/css/typography.css';

const UI_ROOT_ID = 'jaeger-ui-root';

const root = createRoot(document.getElementById(UI_ROOT_ID));

if (typeof trackingContext === 'object' && trackingContext !== null) {
  trackingContext.context(() => {
    root.render(
      <BrowserRouter>
        <CompatRouter>
          <JaegerUIApp />
        </CompatRouter>
      </BrowserRouter>
    );
  });
} else {
  root.render(
    <BrowserRouter>
      <CompatRouter>
        <JaegerUIApp />
      </CompatRouter>
    </BrowserRouter>
  );
}
