# Accordion Component Integration Guide

## Files Created:
1. **components/accordion.html** - The reusable accordion component
2. **components/component-loader.js** - Script to load components dynamically
3. **scripts/accordion-styles.css** - Accordion-specific styles (refactored with BEM naming)
4. **scripts/accordion-script.js** - Accordion functionality (updated to use new class names)

## How to Integrate into teachers-ux.html:

### Step 1: Add Stylesheet and Scripts to `<head>`

```html
<head>
    <!-- Existing meta tags and fonts -->
    <link rel="stylesheet" href="../styles/tokens.css">
    <link rel="stylesheet" href="../styles/global.css">
    <link rel="stylesheet" href="../styles/article.css">
    
    <!-- ADD ACCORDION STYLES -->
    <link rel="stylesheet" href="../scripts/accordion-styles.css">
    
    <!-- ADD GOOGLE FONT FOR ACCORDION -->
    <link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
```

### Step 2: Add Component Loader and Accordion Script Before `</body>`

```html
    <!-- Existing scripts -->
    <script src="../scripts/article.js"></script>
    
    <!-- ADD COMPONENT LOADER -->
    <script src="../components/component-loader.js"></script>
    
    <!-- ADD ACCORDION SCRIPT -->
    <script src="../scripts/accordion-script.js"></script>
</body>
```

### Step 3: Insert Component Where You Want It in the Page

```html
<!-- Insert anywhere in your article body where you want the accordion -->
<div data-component="../components/accordion.html"></div>
```

## Benefits of This Approach:

✅ **Isolated Styles**: All accordion classes are prefixed with `accordion-` to prevent conflicts
✅ **Reusable**: Can be used on any page by including the same files
✅ **Easy to Maintain**: Update once in components/accordion.html, changes apply everywhere
✅ **No Build Process**: Works with simple HTML file includes
✅ **Clean Separation**: Accordion code doesn't interfere with your existing portfolio styles

## Alternative: Direct Include (No Component Loader)

If you prefer not to use the component loader, you can directly copy the content from `components/accordion.html` and paste it into your teachers-ux.html file where you want it to appear.

Just make sure to include the CSS and JS files as shown in Steps 1 and 2.
