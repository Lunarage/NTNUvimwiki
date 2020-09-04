# NTNU vimwiki

This project makes use of [vimwiki](https://github.com/vimwiki/vimwiki).

After installing vimwiki to your vim, add the following to your vimrc:

~~~vim
" VimWiki NTNU
let wiki_ntnu= {}
let wiki_ntnu.path = '~/NTNUvimwiki/'
"Or wherever you put it
let wiki_ntnu.path_html = '~/NTNUvimwiki/web/'
"Point your webserver to this path if you want to host it
let wiki_ntnu.template_path = '~/NTNUvimwiki/'
let wiki_ntnu.template_default = 'template'
let wiki_ntnu.template_ext = '.html'

call add(g:vimwiki_list, wiki_ntnu)
~~~
