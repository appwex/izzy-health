# Next.js Structure

Next.js is very unopinionated about how to structure your Next.js project.

> The only thing you must really be careful about is to not have anything under pages that aren't actual pages (e.g: tests, components, etc.), because there is no way to ignore them and Next will bundle and deploy them as actual pages.

### The folder structure

We're organizing our project using this folder structure.

```
/pages
    /api // not needed for this project
        authAPI.js
    /stories
        [button].js
        [dialog].js
        [Stories].module.scss
        index.js // to return pages with components story links
    /home
        [Home].js
        [Home].module.scss
        index.js // to import and export
    _app.js
    _document.js
    index.js
```

```
/public
    favicon.ico
```

```
/src
    /components
        /[component-name]
            [ComponentName].js
            [ComponentName].module.scss
            index.js // to import and export
    /hooks
    /types
    /utils
```

##### Import Groups

```
import { useState, useEffect } from 'react'        // from react lib
import { useRouter } from 'next/router'            // next hooks, utils..
import Link from 'next/link'                       // next component
import { useFormik } from 'formik'                 // from other libs
import clsx from 'clsx`

import Button from 'components/button'             // components
import Card from 'components/card'

import PlusIcon from 'assets/svg/plus.svg'         // svg icons
import FolderIcon from 'assets/svg/folder.svg'

import { generateRandomString } from 'utils'       // utils

import stl from "./[ComponentName].module.css"     // stylesheet
```

##### Import Styles

We only need to import `common.scss` file in our `/component/[ComponentName].module.scss`, just like:

```
@import 'styles/common';

.btn {
    @extend .flexCenter, .borderBlue;
    color: $primaryBlue;
}
```
