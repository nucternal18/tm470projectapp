export const customCSS = `
body {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.5;

}

p {
  font-size: 1.2rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: 900;
}

p strong {
  font-weight: 800;
}

ul {
  list-style: disc;
  line-height: 1;
}

ul li {
  font-size: 1rem;
  text-align: left;
}

.ql_container {
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  height: 100%;
  margin: 0px;
  position: relative;
}
.ql_container.ql-disabled .ql-tooltip {
  visibility: hidden;
}
.ql_container.ql-disabled .ql_editor ul[data-checked] > li::before {
  pointer-events: none;

.ql_editor {
  box-sizing: border-box;
  line-height: 1.42;
  height: 100%;
  outline: none;
  overflow-y: auto;
  padding: 12px 15px;
  tab-size: 4;
  -moz-tab-size: 4;
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.ql_editor > * {
  cursor: text;
}
.ql_editor p,
.ql_editor ol,
.ql_editor ul,
.ql_editor pre,
.ql_editor blockquote,
.ql_editor h1,
.ql_editor h2,
.ql_editor h3,
.ql_editor h4,
.ql_editor h5,
.ql_editor h6 {
  margin: 0;
  padding: 0;
  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql_editor p {
  font-size: 1.67em;
}
.ql_editor ol,
.ql_editor ul {
  padding-left: 1.5em;
}
.ql_editor ol > li,
.ql_editor ul > li {
  list-style-type: none;
}
.ql_editor ul > li::before {
  content: '\\2022';
}
.ql_editor ul[data-checked=true],
.ql_editor ul[data-checked=false] {
  pointer-events: none;
}
.ql_editor ul[data-checked=true] > li *,
.ql_editor ul[data-checked=false] > li * {
  pointer-events: all;
}
.ql_editor ul[data-checked=true] > li::before,
.ql_editor ul[data-checked=false] > li::before {
  color: #777;
  cursor: pointer;
  pointer-events: all;
}
.ql_editor ul[data-checked=true] > li::before {
  content: '\\2611';
}
.ql_editor ul[data-checked=false] > li::before {
  content: '\\2610';
}
.ql_editor li::before {
  display: inline-block;
  white-space: nowrap;
  width: 1.2em;
}
.ql_editor li:not(.ql-direction-rtl)::before {
  margin-left: -1.5em;
  margin-right: 0.3em;
  text-align: right;
}
.ql_editor li.ql-direction-rtl::before {
  margin-left: 0.3em;
  margin-right: -1.5em;
}
.ql_editor ol li:not(.ql-direction-rtl),
.ql_editor ul li:not(.ql-direction-rtl) {
  padding-left: 1.5em;
}
.ql_editor ol li.ql-direction-rtl,
.ql_editor ul li.ql-direction-rtl {
  padding-right: 1.5em;
}
.ql_editor ol li {
  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  counter-increment: list-0;
}
.ql_editor ol li:before {
  content: counter(list-0, decimal) '. ';
}
.ql_editor ol li.ql-indent-1 {
  counter-increment: list-1;
}
.ql_editor ol li.ql-indent-1:before {
  content: counter(list-1, lower-alpha) '. ';
}
.ql_editor ol li.ql-indent-1 {
  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql_editor ol li.ql-indent-2 {
  counter-increment: list-2;
}
.ql_editor ol li.ql-indent-2:before {
  content: counter(list-2, lower-roman) '. ';
}
.ql_editor ol li.ql-indent-2 {
  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql_editor ol li.ql-indent-3 {
  counter-increment: list-3;
}
.ql_editor ol li.ql-indent-3:before {
  content: counter(list-3, decimal) '. ';
}
.ql_editor ol li.ql-indent-3 {
  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql_editor ol li.ql-indent-4 {
  counter-increment: list-4;
}
.ql_editor ol li.ql-indent-4:before {
  content: counter(list-4, lower-alpha) '. ';
}
.ql_editor ol li.ql-indent-4 {
  counter-reset: list-5 list-6 list-7 list-8 list-9;
}
.ql_editor ol li.ql-indent-5 {
  counter-increment: list-5;
}
.ql_editor ol li.ql-indent-5:before {
  content: counter(list-5, lower-roman) '. ';
}
.ql_editor ol li.ql-indent-5 {
  counter-reset: list-6 list-7 list-8 list-9;
}
.ql_editor ol li.ql-indent-6 {
  counter-increment: list-6;
}
.ql_editor ol li.ql-indent-6:before {
  content: counter(list-6, decimal) '. ';
}
.ql_editor ol li.ql-indent-6 {
  counter-reset: list-7 list-8 list-9;
}
.ql_editor ol li.ql-indent-7 {
  counter-increment: list-7;
}
.ql_editor ol li.ql-indent-7:before {
  content: counter(list-7, lower-alpha) '. ';
}
.ql_editor ol li.ql-indent-7 {
  counter-reset: list-8 list-9;
}
.ql_editor ol li.ql-indent-8 {
  counter-increment: list-8;
}
.ql_editor ol li.ql-indent-8:before {
  content: counter(list-8, lower-roman) '. ';
}
.ql_editor ol li.ql-indent-8 {
  counter-reset: list-9;
}
.ql_editor ol li.ql-indent-9 {
  counter-increment: list-9;
}
.ql_editor ol li.ql-indent-9:before {
  content: counter(list-9, decimal) '. ';
}
.ql_editor .ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 3em;
}
.ql_editor li.ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 4.5em;
}
.ql_editor .ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 3em;
}
.ql_editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 4.5em;
}
.ql_editor .ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 6em;
}
.ql_editor li.ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 7.5em;
}
.ql_editor .ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 6em;
}
.ql_editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 7.5em;
}
.ql_editor .ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 9em;
}
.ql_editor li.ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 10.5em;
}
.ql_editor .ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 9em;
}
.ql_editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 10.5em;
}
.ql_editor .ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 12em;
}
.ql_editor li.ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 13.5em;
}
.ql_editor .ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 12em;
}
.ql_editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 13.5em;
}
.ql_editor .ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 15em;
}
.ql_editor li.ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 16.5em;
}
.ql_editor .ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 15em;
}
.ql_editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 16.5em;
}
.ql_editor .ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 18em;
}
.ql_editor li.ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 19.5em;
}
.ql_editor .ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 18em;
}
.ql_editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 19.5em;
}
.ql_editor .ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 21em;
}
.ql_editor li.ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 22.5em;
}
.ql_editor .ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 21em;
}
.ql_editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 22.5em;
}
.ql_editor .ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 24em;
}
.ql_editor li.ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 25.5em;
}
.ql_editor .ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 24em;
}
.ql_editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 25.5em;
}
.ql_editor .ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 27em;
}
.ql_editor li.ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 28.5em;
}
.ql_editor .ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 27em;
}
.ql_editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 28.5em;
}
.ql_editor .ql-video {
  display: block;
  max-width: 100%;
}
.ql_editor .ql-video.ql-align-center {
  margin: 0 auto;
}
.ql_editor .ql-video.ql-align-right {
  margin: 0 0 0 auto;
}
.ql_editor .ql-bg-black {
  background-color: #000;
}
.ql_editor .ql-bg-red {
  background-color: #e60000;
}
.ql_editor .ql-bg-orange {
  background-color: #f90;
}
.ql_editor .ql-bg-yellow {
  background-color: #ff0;
}
.ql_editor .ql-bg-green {
  background-color: #008a00;
}
.ql_editor .ql-bg-blue {
  background-color: #06c;
}
.ql_editor .ql-bg-purple {
  background-color: #93f;
}
.ql_editor .ql-color-white {
  color: #fff;
}
.ql_editor .ql-color-red {
  color: #e60000;
}
.ql_editor .ql-color-orange {
  color: #f90;
}
.ql_editor .ql-color-yellow {
  color: #ff0;
}
.ql_editor .ql-color-green {
  color: #008a00;
}
.ql_editor .ql-color-blue {
  color: #06c;
}
.ql_editor .ql-color-purple {
  color: #93f;
}
.ql_editor .ql-font-serif {
  font-family: Georgia, Times New Roman, serif;
}
.ql_editor .ql-font-monospace {
  font-family: Monaco, Courier New, monospace;
}
.ql_editor .ql-size-small {
  font-size: 0.75em;
}
.ql_editor .ql-size-large {
  font-size: 1.5em;
}
.ql_editor .ql-size-huge {
  font-size: 2.5em;
}
.ql_editor .ql-direction-rtl {
  direction: rtl;
  text-align: inherit;
}
.ql_editor .ql-align-center {
  text-align: center;
}
.ql_editor .ql-align-justify {
  text-align: justify;
  font-size: 1.67em;
}
.ql_editor .ql-align-right {
  text-align: right;
}
.ql_editor.ql-blank::before {
  color: rgba(0,0,0,0.6);
  content: attr(data-placeholder);
  font-style: italic;
  left: 15px;
  pointer-events: none;
  position: absolute;
  right: 15px;
}

.ql_snow {
  box-sizing: border-box;
}
.ql_snow * {
  box-sizing: border-box;
}
.ql_snow .ql-hidden {
  display: none;
}
.ql_snow .ql-out-bottom,
.ql_snow .ql-out-top {
  visibility: hidden;
}
.ql_snow .ql-tooltip {
  position: absolute;
  transform: translateY(10px);
}
.ql_snow .ql-tooltip a {
  cursor: pointer;
  text-decoration: none;
}
.ql_snow .ql-tooltip.ql-flip {
  transform: translateY(-10px);
}
.ql_snow .ql-formats {
  display: inline-block;
  vertical-align: middle;
}
.ql_snow .ql-formats:after {
  clear: both;
  content: '';
  display: table;
}
.ql_snow .ql-stroke {
  fill: none;
  stroke: #444;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}
.ql_snow .ql-stroke-miter {
  fill: none;
  stroke: #444;
  stroke-miterlimit: 10;
  stroke-width: 2;
}
.ql_snow .ql-fill,
.ql_snow .ql-stroke.ql-fill {
  fill: #444;
}
.ql_snow .ql-empty {
  fill: none;
}
.ql_snow .ql-even {
  fill-rule: evenodd;
}
.ql_snow .ql-thin,
.ql_snow .ql-stroke.ql-thin {
  stroke-width: 1;
}
.ql_snow .ql-transparent {
  opacity: 0.4;
}
.ql_snow .ql-direction svg:last-child {
  display: none;
}
.ql_snow .ql-direction.ql-active svg:last-child {
  display: inline;
}
.ql_snow .ql-direction.ql-active svg:first-child {
  display: none;
}
.ql_snow .ql_editor h1 {
  font-size: 2em;
}
.ql_snow .ql_editor h2 {
  font-size: 1.5em;
}
.ql_snow .ql_editor h3 {
  font-size: 1.17em;
}
.ql_snow .ql_editor h4 {
  font-size: 1em;
}
.ql_snow .ql_editor h5 {
  font-size: 0.83em;
}
.ql_snow .ql_editor h6 {
  font-size: 0.67em;
}
.ql_snow .ql_editor p {
  font-size: 1.67em;
}
.ql_snow .ql_editor a {
  text-decoration: underline;
  color: #00DCB3;
}
.ql_snow .ql_editor blockquote {
  border-left: 4px solid #ccc;
  margin-bottom: 5px;
  margin-top: 5px;
  padding-left: 16px;
}
.ql_snow .ql_editor code,
.ql_snow .ql_editor pre {
  border-radius: 3px;
}
.ql_snow .ql_editor pre {
  white-space: pre-wrap;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 5px 10px;
}
.ql_snow .ql_editor code {
  font-size: 85%;
  padding: 2px 4px;
}
.ql_snow .ql_editor pre.ql-syntax {
  background-color: #23241f;
  color: #f8f8f2;
  overflow: visible;
}
.ql_snow .ql_editor img {
  max-width: 100%;
}

.ql_snow a {
  color: #00DCB3;
}
.ql_container.ql_snow {
  border: 1px solid #ccc;
}"`;
