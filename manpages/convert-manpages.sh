CURRDIR=$(pwd)
ROOT="${CURRDIR}/.."

JAVASCRIPT_DIR="${ROOT}/docs/assets/man"
MARKDOWN_DIR="${ROOT}/docs/man"

ADD_TO_SIDEBAR="'Manpages': ["

function make_js(){ # $1 = name, $2 = path
    cat > "${JAVASCRIPT_DIR}/${1}.js" <<EOL
import ReactHtmlParser from 'react-html-parser';

const raw = \`
EOL
    pandoc -t html "$2" | tr '`' "'" >> "${JAVASCRIPT_DIR}/${1}.js"
    cat >> "${JAVASCRIPT_DIR}/${1}.js" <<EOL
\`

const html = ReactHtmlParser(raw);
export default html;
EOL
}

function make_markdown(){ # $1 = name
    cat > "${MARKDOWN_DIR}/${1}.md" <<EOL
---
id: netkit-manpage-$1
title: $1 - manpage
sidebar_label: $1
custom_edit_url: https://github.com/netkit-jh/netkit-jh-build/tree/master/core/man
keywords:
  - netkit
  - netkit-jh
  - manpage
  - man
  - $1
---

import html from '../assets/man/${1}.js'

<div>{html}</div>

EOL
}

function build(){
    manpagepath=$1
    name=$(basename "$manpage" | sed 's/\.[^.]*$//')
    make_js $name $manpagepath
    make_markdown $name
    ADD_TO_SIDEBAR="${ADD_TO_SIDEBAR}\n'man/netkit-manpage-${name}',"
}

for manpage in src/man1/*; do
    build $manpage
done
for manpage in src/man5/*; do
    build $manpage
done
for manpage in src/man7/*; do
    build $manpage
done

ADD_TO_SIDEBAR="${ADD_TO_SIDEBAR}\n],"

echo -e "Finished building manpages. Remember to update sidebars.js with the following:\n\n"
echo -e "$ADD_TO_SIDEBAR"
