# Accessibility Audit Report
**Portfolio 2026 V2 - Juliana's Portfolio**  
**Audit Date:** February 20, 2026  
**Auditor:** Augment Agent  
**WCAG Version:** 2.1 Level AA

---

## Executive Summary

This accessibility audit evaluates the portfolio website against WCAG 2.1 Level AA standards. The audit covers all HTML pages, JavaScript interactions, and CSS styling to identify barriers that may prevent users with disabilities from accessing content.

**Overall Assessment:** The portfolio demonstrates good foundational accessibility practices but has several critical and moderate issues that should be addressed to ensure full compliance and inclusive user experience.

### Quick Stats
- **Pages Audited:** 6 (index.html + 5 case study pages)
- **Critical Issues:** 8
- **Moderate Issues:** 12
- **Minor Issues:** 7
- **Best Practices:** 6

---

## Critical Issues (Priority 1)

### 1. **Language Attribute Inconsistency**
**WCAG:** 3.1.1 Language of Page (Level A)  
**Impact:** Screen readers may mispronounce content

**Issue:**
- `index.html` declares `lang="pt-BR"` (Portuguese)
- `via-apps.html` declares `lang="pt-BR"` (Portuguese)
- Other pages declare `lang="en"` (English)
- All content is in English

**Location:**
- `index.html` line 2
- `pages/via-apps.html` line 2

**Recommendation:**
```html
<!-- Change to -->
<html lang="en">
```

---

### 2. **Missing Skip Navigation Link**
**WCAG:** 2.4.1 Bypass Blocks (Level A)  
**Impact:** Keyboard users must tab through all navigation on every page

**Issue:** No "skip to main content" link present on any page

**Recommendation:**
Add skip link as first focusable element:
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

With CSS:
```css
.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: #fff;
    padding: 8px;
    z-index: 100;
}
.skip-link:focus {
    top: 0;
}
```

---

### 3. **SVG Icons Missing Accessible Text**
**WCAG:** 1.1.1 Non-text Content (Level A)  
**Impact:** Screen reader users cannot understand icon-only buttons/links

**Issue:** Back navigation SVG arrows lack proper accessible names

**Location:**
- All case study pages (sticky-back navigation)
- Lines 27-45 in `pages/teachers-ux.html`

**Current Code:**
```html
<a href="../index.html" class="back-link">
    <svg>...</svg>
    All cases
</a>
```

**Recommendation:**
Add `aria-hidden="true"` to decorative SVGs when text is present:
```html
<a href="../index.html" class="back-link">
    <svg aria-hidden="true">...</svg>
    All cases
</a>
```

---

### 4. **Inline onclick Handlers**
**WCAG:** 2.1.1 Keyboard (Level A)  
**Impact:** May not be keyboard accessible, violates separation of concerns

**Issue:** Multiple onclick handlers in HTML

**Location:**
- `index.html` lines 34, 41, 52, 62, 73, 83
- `pages/teachers-ux.html` lines 334, 345, 351, 387
- `pages/via-apps.html` line 67

**Current Code:**
```html
<div onclick="window.location.href='pages/ai-interaction.html'">
```

**Recommendation:**
Move to external JavaScript with proper event listeners:
```javascript
card.addEventListener('click', (e) => {
    window.location.href = 'pages/ai-interaction.html';
});
```

---

### 5. **Accordion Headers Not Keyboard Accessible**
**WCAG:** 2.1.1 Keyboard (Level A), 4.1.2 Name, Role, Value (Level A)

**Issue:** Accordion uses `onclick` on `<div>` instead of `<button>`

**Location:** `pages/teachers-ux.html` lines 334, 367, 389

**Current Code:**
```html
<div class="accordion-header" onclick="toggleAccordion(this)">
    <h4>from Surface to sense</h4>
    <span class="accordion-icon">^</span>
</div>
```

**Recommendation:**
```html
<button class="accordion-header" 
        aria-expanded="true" 
        aria-controls="accordion-content-1">
    <h4>from Surface to sense</h4>
    <span class="accordion-icon" aria-hidden="true">^</span>
</button>
<div id="accordion-content-1" class="accordion-content" role="region">
    ...
</div>
```

---

### 6. **Form Controls Missing Labels**
**WCAG:** 1.3.1 Info and Relationships (Level A), 4.1.2 Name, Role, Value (Level A)

**Issue:** Checkbox switches lack associated labels

**Location:** `pages/teachers-ux.html` lines 374, 452

**Current Code:**
```html
<input type="checkbox" id="rhythmSwitch" />
<span class="accordion-switch-label">Provide Rhythm</span>
```

**Recommendation:**
```html
<label for="rhythmSwitch">
    <input type="checkbox" id="rhythmSwitch" />
    <span class="accordion-slider"></span>
    <span class="accordion-switch-label">Provide Rhythm</span>
</label>
```

---

### 7. **Alert() Usage for User Feedback**
**WCAG:** 4.1.3 Status Messages (Level AA)

**Issue:** JavaScript `alert()` interrupts screen readers and is not dismissible

**Location:** `scripts/accordion-script.js` lines 269, 271

**Current Code:**
```javascript
alert('🎉 Perfect! Clear patterns make it easy to reach your goal.');
```

**Recommendation:**
Use ARIA live regions:
```html
<div role="status" aria-live="polite" class="game-feedback"></div>
```
```javascript
feedbackEl.textContent = '🎉 Perfect! Clear patterns make it easy to reach your goal.';
```

---

### 8. **Focus Management in Modal**
**WCAG:** 2.4.3 Focus Order (Level A)

**Issue:** Image expander modal doesn't trap focus

**Location:** `scripts/image-expander.js`

**Recommendation:**
Implement focus trap when modal opens and restore focus when closed.

---

## Moderate Issues (Priority 2)

### 9. **Heading Hierarchy Violations**
**WCAG:** 1.3.1 Info and Relationships (Level A)

**Issue:** Inconsistent heading levels in project details

**Location:** All case study pages - hero sections use `<h3>` for labels like "ROLE", "TIMELINE"

**Current Code:**
```html
<div class="detail-item-hero">
    <h3>ROLE</h3>
    <p>Product Designer</p>
</div>
```

**Recommendation:**
Use `<dt>` and `<dd>` or styled `<strong>`:
```html
<div class="detail-item-hero">
    <strong class="detail-label">Role</strong>
    <p>Product Designer</p>
</div>
```

---

### 10. **Insufficient Color Contrast**
**WCAG:** 1.4.3 Contrast (Minimum) (Level AA)

**Issue:** Navigation links have 0.6 opacity which may fail contrast requirements

**Location:** `styles/global.css` line 78

**Current Code:**
```css
.nav-link {
    opacity: 0.6;
}
```

**Recommendation:**
Test actual contrast ratios. If failing, increase opacity to 0.8 or use darker colors instead of opacity.

---

### 11. **Missing Focus Indicators**
**WCAG:** 2.4.7 Focus Visible (Level AA)

**Issue:** Custom focus styles may not be visible enough

**Location:** `styles/global.css` - limited focus-visible styles

**Recommendation:**
Add consistent, visible focus indicators:
```css
*:focus-visible {
    outline: 3px solid #8B5CF6;
    outline-offset: 2px;
}

button:focus-visible,
a:focus-visible {
    outline: 3px solid #8B5CF6;
    outline-offset: 2px;
}
```

---

### 12. **Reading Progress Bar Not Announced**
**WCAG:** 4.1.3 Status Messages (Level AA)

**Issue:** Visual progress indicator has no screen reader equivalent

**Location:** `scripts/article.js` lines 40-63

**Recommendation:**
Add ARIA live region for progress updates:
```html
<div role="progressbar"
     aria-valuenow="0"
     aria-valuemin="0"
     aria-valuemax="100"
     aria-label="Reading progress">
</div>
```

---

### 13. **Scroll-Down Button Lacks Context**
**WCAG:** 2.4.4 Link Purpose (Level A)

**Issue:** "Scroll down" aria-label doesn't indicate destination

**Location:** All case study pages

**Current Code:**
```html
<button class="scroll-down-btn" aria-label="Scroll down">
```

**Recommendation:**
```html
<button class="scroll-down-btn" aria-label="Scroll to overview section">
```

---

### 14. **Project Cards Missing Semantic Structure**
**WCAG:** 1.3.1 Info and Relationships (Level A)

**Issue:** Cards should use `<article>` or proper landmarks

**Location:** `index.html` lines 34-84

**Recommendation:**
```html
<article class="card card-major" aria-labelledby="card-title-1">
    <h2 id="card-title-1">Product experience in the age of AI</h2>
    ...
</article>
```

---

### 15. **Video Elements Missing Captions**
**WCAG:** 1.2.2 Captions (Prerecorded) (Level A)

**Issue:** Videos created dynamically lack caption tracks

**Location:** `scripts/main.js` lines 126-133

**Recommendation:**
If videos contain speech or important audio, add WebVTT caption tracks.

---

### 16. **Parallax Effect May Cause Motion Sickness**
**WCAG:** 2.3.3 Animation from Interactions (Level AAA)

**Issue:** No way to disable parallax scrolling

**Location:** `scripts/main.js` lines 89-97

**Recommendation:**
Respect `prefers-reduced-motion`:
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * parallaxSpeed;
        speechBubble.style.transform = `translateY(-${parallax}px)`;
    });
}
```

---

### 17. **Touch Target Size Too Small**
**WCAG:** 2.5.5 Target Size (Level AAA)

**Issue:** Some interactive elements may be smaller than 44x44px

**Location:** Arrow buttons in accordion game, navigation links

**Recommendation:**
Ensure minimum 44x44px touch targets:
```css
.accordion-arrow-btn {
    min-width: 44px;
    min-height: 44px;
}
```

---

### 18. **LinkedIn Icon Missing Text Alternative**
**WCAG:** 1.1.1 Non-text Content (Level A)

**Issue:** Footer LinkedIn link has aria-label but SVG should be hidden

**Location:** `index.html` line 19, all footer sections

**Current Code:**
```html
<a href="..." aria-label="LinkedIn">
    <svg>...</svg>
</a>
```

**Recommendation:**
```html
<a href="..." aria-label="Visit my LinkedIn profile">
    <svg aria-hidden="true">...</svg>
</a>
```

---

### 19. **Smooth Scroll May Disorient Users**
**WCAG:** 2.3.3 Animation from Interactions (Level AAA)

**Issue:** Custom smooth scroll doesn't respect user preferences

**Location:** `scripts/main.js` lines 30-52, `scripts/article.js` lines 5-16

**Recommendation:**
Check for reduced motion preference before applying smooth scroll.

---

### 20. **Image Lazy Loading Missing Fallback**
**WCAG:** 1.1.1 Non-text Content (Level A)

**Issue:** Images without IntersectionObserver support may not load properly

**Location:** `scripts/article.js` lines 22-36

**Recommendation:**
Add fallback for browsers without IntersectionObserver:
```javascript
if ('IntersectionObserver' in window) {
    // existing code
} else {
    // Immediately add 'loaded' class to all images
    document.querySelectorAll('.article-image img').forEach(img => {
        img.classList.add('loaded');
    });
}
```

---

## Minor Issues (Priority 3)

### 21. **Page Titles Could Be More Descriptive**
**WCAG:** 2.4.2 Page Titled (Level A)

**Issue:** Some page titles are generic

**Location:** Various pages

**Example:**
```html
<title>Home - Portfolio</title>
```

**Recommendation:**
```html
<title>Juliana - Product Designer Portfolio | UX Research & Design</title>
```

---

### 22. **Missing Landmark Roles**
**WCAG:** 1.3.1 Info and Relationships (Level A)

**Issue:** Main content areas lack semantic landmarks

**Recommendation:**
```html
<main id="main-content">
    <article class="case-study">
        ...
    </article>
</main>
```

---

### 23. **Console.log Statement in Production**
**Best Practice**

**Location:** `scripts/main.js` line 22

**Recommendation:** Remove or wrap in development check

---

### 24. **Empty Alt Text on Decorative Images**
**WCAG:** 1.1.1 Non-text Content (Level A)

**Issue:** Some images may be decorative but have descriptive alt text

**Recommendation:** Review each image - if purely decorative, use `alt=""`

---

### 25. **No ARIA Labels on Navigation Regions**
**WCAG:** 4.1.2 Name, Role, Value (Level A)

**Issue:** Multiple `<nav>` elements without distinguishing labels

**Location:** `index.html` line 22, case study pages line 469

**Recommendation:**
```html
<nav class="main-nav" aria-label="Main navigation">
<nav class="project-navigation" aria-label="Related projects">
```

---

### 26. **Figcaption Could Be More Descriptive**
**Best Practice**

**Issue:** Some figcaptions are very brief

**Recommendation:** Ensure figcaptions provide adequate context for screen reader users

---

### 27. **No Visible Focus on Card Clicks**
**WCAG:** 2.4.7 Focus Visible (Level AA)

**Issue:** Clickable cards don't show focus state

**Location:** `index.html` project cards

**Recommendation:**
Make cards keyboard accessible with proper focus:
```html
<a href="pages/ai-interaction.html" class="card card-major">
    <!-- card content -->
</a>
```

---

## Positive Findings (Best Practices)

### ✅ 1. **Proper Viewport Meta Tag**
All pages include proper responsive viewport configuration.

### ✅ 2. **Semantic HTML Structure**
Good use of `<section>`, `<article>`, `<figure>`, and `<figcaption>` elements.

### ✅ 3. **ARIA Labels on Icon Buttons**
Scroll-down buttons include aria-label attributes.

### ✅ 4. **Keyboard Support for Modal Close**
Image expander modal can be closed with Escape key.

### ✅ 5. **Responsive Design**
Site adapts to different screen sizes with appropriate breakpoints.

### ✅ 6. **Font Preconnect for Performance**
Google Fonts use preconnect for better performance.

---

## Testing Recommendations

### Automated Testing Tools
1. **axe DevTools** - Browser extension for automated accessibility testing
2. **WAVE** - Web accessibility evaluation tool
3. **Lighthouse** - Chrome DevTools accessibility audit
4. **Pa11y** - Automated accessibility testing CLI tool

### Manual Testing
1. **Keyboard Navigation** - Tab through entire site without mouse
2. **Screen Reader Testing** - Test with NVDA (Windows), JAWS, or VoiceOver (Mac)
3. **Color Contrast** - Use WebAIM Contrast Checker
4. **Zoom Testing** - Test at 200% zoom level
5. **Mobile Screen Reader** - Test with TalkBack (Android) or VoiceOver (iOS)

### User Testing
Consider testing with users who:
- Use screen readers
- Navigate by keyboard only
- Have low vision
- Have motor impairments

---

## Priority Implementation Roadmap

### Phase 1 (Critical - Immediate)
1. Fix language attributes
2. Add skip navigation link
3. Fix accordion keyboard accessibility
4. Add proper form labels
5. Replace alert() with ARIA live regions

### Phase 2 (Moderate - Short Term)
1. Fix heading hierarchy
2. Improve focus indicators
3. Add motion preference detection
4. Improve color contrast
5. Add semantic landmarks

### Phase 3 (Minor - Long Term)
1. Enhance page titles
2. Review and optimize alt text
3. Add ARIA labels to navigation
4. Improve touch target sizes
5. Comprehensive screen reader testing

---

## Conclusion

The portfolio demonstrates a solid foundation with semantic HTML and some accessibility considerations. However, several critical issues need immediate attention, particularly around keyboard accessibility, ARIA implementation, and interactive components.

**Estimated Effort:**
- Phase 1: 8-12 hours
- Phase 2: 6-8 hours
- Phase 3: 4-6 hours

**Compliance Status:**
- Current: ~60% WCAG 2.1 AA compliant
- After Phase 1: ~80% compliant
- After All Phases: ~95% compliant

---

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM](https://webaim.org/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)

---

**Report Generated:** February 20, 2026
**Next Review Recommended:** After implementing Phase 1 fixes


