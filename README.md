# lib-svg-icons

A lightweight Web Component library to easily use customizable SVG icons in any web framework (React, Vue, Angular, etc.).

# Installation

```
npm install lib-svg-icons

or

yarn add lib-svg-icons
```

# To know available icon details please click below link

https://edisondevadoss.github.io/lib-svg-icons-dashbaord/

# Usage

### Basic Usage

```
<script type="module">
  import 'lib-svg-icons';
</script>

<svg-icon name="user"></svg-icon>
```

# React Integration

```
import React from 'react';
import { createComponent } from '@lit/react';
import { SvgIcon } from 'lib-svg-icons';

const Svg = createComponent({
  react: React,
  tagName: 'svg-icon',
  elementClass: SvgIcon
});

function App() {
  return (
    <div>
      <h1>My SVG Viewer</h1>

      <Svg name="user" size={10} color="green" />
    </div>
  );
}

export default App;
```

