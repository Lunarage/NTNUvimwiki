# NTNU vimwiki

This project makes use of [vimwiki](https://github.com/vimwiki/vimwiki).

After installing vimwiki to your vim, add the following to your vimrc:

~~~
" VimWiki NTNU
" :h vimwiki
let wiki_ntnu= {}
let wiki_ntnu.path = '~/vimwikiNTNU/'
let wiki_ntnu.path_html = '~/vimwikiNTNU/web/'
let wiki_ntnu.template_path = '~/vimwikiNTNU/'
let wiki_ntnu.template_default = 'template'
let wiki_ntnu.template_ext = '.html'
let wiki_ntnu.auto_export = 0
let wiki_ntnu.nested_syntaxes = {'css': 'css','php': 'php', 'html': 'html', 'vim': 'vim', 'plsql': 'sql', 'bash': 'sh'}

call add(g:vimwiki_list, wiki_ntnu)
~~~
