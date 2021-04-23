


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>js-base64/base64.js at master · dankogai/js-base64 · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="dankogai/js-base64" name="twitter:title" /><meta content="js-base64 - Base64 implementation for JavaScript" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/68812?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/68812?v=3&amp;s=400" property="og:image" /><meta content="dankogai/js-base64" property="og:title" /><meta content="https://github.com/dankogai/js-base64" property="og:url" /><meta content="js-base64 - Base64 implementation for JavaScript" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="C8AED682:6795:308C15F7:564CBAC4" name="octolytics-dimension-request_id" />

<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">
    <meta class="js-ga-set" name="dimension4" content="Current repo nav">




    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="78fd8c2711fae4551f9b3926283f8fa3b5622d12" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-ceefdafe87b6f218cd93adcaec6a8878ed1f959f7f5937d308b4b0f6b251a7a0.css" integrity="sha256-zu/a/oe28hjNk63K7GqIeO0flZ9/WTfTCLSw9rJRp6A=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-7048b51d8e88507e1babbe42418137bac3f5ef75f4b1957242327b23ebacd292.css" integrity="sha256-cEi1HY6IUH4bq75CQYE3usP173X0sZVyQjJ7I+us0pI=" media="all" rel="stylesheet" />
    
    
    


    <meta http-equiv="x-pjax-version" content="4ebd0ad097c6d8058e7b53ea95f7187b">

      
  <meta name="description" content="js-base64 - Base64 implementation for JavaScript">
  <meta name="go-import" content="github.com/dankogai/js-base64 git https://github.com/dankogai/js-base64.git">

  <meta content="68812" name="octolytics-dimension-user_id" /><meta content="dankogai" name="octolytics-dimension-user_login" /><meta content="165557" name="octolytics-dimension-repository_id" /><meta content="dankogai/js-base64" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="165557" name="octolytics-dimension-repository_network_root_id" /><meta content="dankogai/js-base64" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/dankogai/js-base64/commits/master.atom" rel="alternate" title="Recent Commits to js-base64:master" type="application/atom+xml">

  </head>


  <body class="logged_out   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Fdankogai%2Fjs-base64%2Fblob%2Fmaster%2Fbase64.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/dankogai/js-base64/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/dankogai/js-base64/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



    <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div class="pagehead repohead instapaper_ignore readability-menu">

      <div class="container">

        <div class="clearfix">
          

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fdankogai%2Fjs-base64"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/dankogai/js-base64/watchers">
    30
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fdankogai%2Fjs-base64"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/dankogai/js-base64/stargazers">
      496
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fdankogai%2Fjs-base64"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>

    <a href="/dankogai/js-base64/network" class="social-count">
      175
    </a>
  </li>
</ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="mega-octicon octicon-repo"></span>
  <span class="author"><a href="/dankogai" class="url fn" itemprop="url" rel="author"><span itemprop="title">dankogai</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/dankogai/js-base64" data-pjax="#js-repo-pjax-container">js-base64</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline ">
        <div class="repository-sidebar clearfix">
          
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/dankogai/js-base64/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/dankogai/js-base64" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /dankogai/js-base64">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/dankogai/js-base64/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /dankogai/js-base64/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/dankogai/js-base64/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /dankogai/js-base64/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/dankogai/js-base64/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /dankogai/js-base64/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/dankogai/js-base64/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /dankogai/js-base64/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

            <div class="only-with-full-nav">
                
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3 class="text-small text-muted"><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/dankogai/js-base64.git" readonly="readonly" aria-label="HTTPS clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3 class="text-small text-muted"><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/dankogai/js-base64" readonly="readonly" aria-label="Subversion checkout URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<div class="clone-options text-small text-muted">You can clone with
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form " data-form-nonce="78fd8c2711fae4551f9b3926283f8fa3b5622d12" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Nbh3+yHh/a8M8UDa4MTk3XCgC/iVhu/gAonK8tJcBHaU5z3NmhZJWySB7JzOKH/6fvR23sLv23y3RNK48pWWeg==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form> or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form " data-form-nonce="78fd8c2711fae4551f9b3926283f8fa3b5622d12" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="R2Lz96oUaQcPxnbGjyDo2Kucdch1nefImgx/fqxWrL0hASPTen0fu0lU9l+y8+4M5Hs3CuENPO4sQJDuOv9OOQ==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</div>
  <a href="https://windows.github.com" class="btn btn-sm sidebar-button" title="Save dankogai/js-base64 to your computer and use it in GitHub Desktop." aria-label="Save dankogai/js-base64 to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-desktop-download"></span>
    Clone in Desktop
  </a>

              <a href="/dankogai/js-base64/archive/master.zip"
                 class="btn btn-sm sidebar-button"
                 aria-label="Download the contents of dankogai/js-base64 as a zip file"
                 title="Download the contents of dankogai/js-base64 as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div>
        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          

<a href="/dankogai/js-base64/blob/cf9528bdf9971b2c4e9ed2a09f4243027ea5519b/base64.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:54e3f8d57d3e1786f0423ae94aec43b6 -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/dankogai/js-base64/blob/master/base64.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dankogai/js-base64/tree/2.1.9/base64.js"
                 data-name="2.1.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.9">2.1.9</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dankogai/js-base64/tree/2.1.8/base64.js"
                 data-name="2.1.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.8">2.1.8</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dankogai/js-base64/tree/2.1.7/base64.js"
                 data-name="2.1.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.7">2.1.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dankogai/js-base64/tree/2.1.6/base64.js"
                 data-name="2.1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.6">2.1.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dankogai/js-base64/tree/2.1.5/base64.js"
                 data-name="2.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.5">2.1.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dankogai/js-base64/tree/2.1.4/base64.js"
                 data-name="2.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.4">2.1.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dankogai/js-base64/tree/2.1.3/base64.js"
                 data-name="2.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.3">2.1.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dankogai/js-base64/tree/2.1.2/base64.js"
                 data-name="2.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.2">2.1.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/dankogai/js-base64/tree/2.1.1/base64.js"
                 data-name="2.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.1">2.1.1</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="btn-group right">
      <a href="/dankogai/js-base64/find/master"
            class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-nw"
            data-pjax
            data-hotkey="t"
            aria-label="Quickly jump between files">
        <span class="octicon octicon-list-unordered"></span>
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </div>

    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/dankogai/js-base64" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">js-base64</span></a></span></span><span class="separator">/</span><strong class="final-path">base64.js</strong>
    </div>
  </div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/dankogai/js-base64/commit/c98b8df7cf747f909386dd62f8f73bbff1056ff7" data-pjax>
          c98b8df
        </a>
        <time datetime="2015-09-02T00:05:12Z" is="relative-time">Sep 2, 2015</time>
      </span>
      <div>
        <img alt="@samthor" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/119184?v=3&amp;s=40" width="20" />
        <a href="/samthor" class="user-mention" rel="contributor">samthor</a>
          <a href="/dankogai/js-base64/commit/c98b8df7cf747f909386dd62f8f73bbff1056ff7" class="message" data-pjax="true" title="Update bower/base64 to match LICENSE.">Update bower/base64 to match LICENSE.</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>8</strong>
         contributors
      </a>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="neojski" href="/dankogai/js-base64/commits/master/base64.js?author=neojski"><img alt="@neojski" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/3188532?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="samthor" href="/dankogai/js-base64/commits/master/base64.js?author=samthor"><img alt="@samthor" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/119184?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="robertmassaioli" href="/dankogai/js-base64/commits/master/base64.js?author=robertmassaioli"><img alt="@robertmassaioli" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/149178?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jstayton" href="/dankogai/js-base64/commits/master/base64.js?author=jstayton"><img alt="@jstayton" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/98357?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jonathanong" href="/dankogai/js-base64/commits/master/base64.js?author=jonathanong"><img alt="@jonathanong" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/643505?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="gigimon" href="/dankogai/js-base64/commits/master/base64.js?author=gigimon"><img alt="@gigimon" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/297982?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="foomin10" href="/dankogai/js-base64/commits/master/base64.js?author=foomin10"><img alt="@foomin10" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/3928437?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="davido" href="/dankogai/js-base64/commits/master/base64.js?author=davido"><img alt="@davido" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/347173?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@neojski" height="24" src="https://avatars0.githubusercontent.com/u/3188532?v=3&amp;s=48" width="24" />
            <a href="/neojski">neojski</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@samthor" height="24" src="https://avatars0.githubusercontent.com/u/119184?v=3&amp;s=48" width="24" />
            <a href="/samthor">samthor</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@robertmassaioli" height="24" src="https://avatars1.githubusercontent.com/u/149178?v=3&amp;s=48" width="24" />
            <a href="/robertmassaioli">robertmassaioli</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jstayton" height="24" src="https://avatars2.githubusercontent.com/u/98357?v=3&amp;s=48" width="24" />
            <a href="/jstayton">jstayton</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jonathanong" height="24" src="https://avatars1.githubusercontent.com/u/643505?v=3&amp;s=48" width="24" />
            <a href="/jonathanong">jonathanong</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@gigimon" height="24" src="https://avatars2.githubusercontent.com/u/297982?v=3&amp;s=48" width="24" />
            <a href="/gigimon">gigimon</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@foomin10" height="24" src="https://avatars3.githubusercontent.com/u/3928437?v=3&amp;s=48" width="24" />
            <a href="/foomin10">foomin10</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@davido" height="24" src="https://avatars3.githubusercontent.com/u/347173?v=3&amp;s=48" width="24" />
            <a href="/davido">davido</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/dankogai/js-base64/raw/master/base64.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/dankogai/js-base64/blame/master/base64.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/dankogai/js-base64/commits/master/base64.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

        <button type="button" class="octicon-btn disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-pencil"></span>
        </button>
        <button type="button" class="octicon-btn octicon-btn-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </button>
  </div>

  <div class="file-info">
      195 lines (193 sloc)
      <span class="file-info-divider"></span>
    6.64 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * $Id: base64.js,v 2.15 2014/04/05 12:58:57 dankogai Exp dankogai $</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  Licensed under the BSD 3-Clause License.</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *    http://opensource.org/licenses/BSD-3-Clause</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  References:</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *    http://en.wikipedia.org/wiki/Base64</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">global</span>) {</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// existing version for noConflict()</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> _Base64 <span class="pl-k">=</span> <span class="pl-c1">global</span>.Base64;</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> version <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>2.1.9<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// if node.js, we use Buffer</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> buffer;</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-c1">module</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">module</span>.exports) {</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">            buffer <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>buffer<span class="pl-pds">&#39;</span></span>).Buffer;</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">catch</span> (err) {}</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// constants</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> b64chars</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">b64tab</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">bin</span>) {</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> t <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, l <span class="pl-k">=</span> bin.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> l; i<span class="pl-k">++</span>) t[bin.<span class="pl-c1">charAt</span>(i)] <span class="pl-k">=</span> i;</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> t;</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">    }(b64chars);</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> fromCharCode <span class="pl-k">=</span> <span class="pl-c1">String</span>.fromCharCode;</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// encoder stuff</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">cb_utob</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">c</span>) {</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (c.<span class="pl-c1">length</span> <span class="pl-k">&lt;</span> <span class="pl-c1">2</span>) {</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> cc <span class="pl-k">=</span> c.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> cc <span class="pl-k">&lt;</span> <span class="pl-c1">0x80</span> <span class="pl-k">?</span> c</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">:</span> cc <span class="pl-k">&lt;</span> <span class="pl-c1">0x800</span> <span class="pl-k">?</span> (<span class="pl-c1">fromCharCode</span>(<span class="pl-c1">0xc0</span> <span class="pl-k">|</span> (cc <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">6</span>))</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">                                <span class="pl-k">+</span> <span class="pl-c1">fromCharCode</span>(<span class="pl-c1">0x80</span> <span class="pl-k">|</span> (cc <span class="pl-k">&amp;</span> <span class="pl-c1">0x3f</span>)))</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">:</span> (<span class="pl-c1">fromCharCode</span>(<span class="pl-c1">0xe0</span> <span class="pl-k">|</span> ((cc <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">12</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0f</span>))</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">                   <span class="pl-k">+</span> <span class="pl-c1">fromCharCode</span>(<span class="pl-c1">0x80</span> <span class="pl-k">|</span> ((cc <span class="pl-k">&gt;&gt;&gt;</span>  <span class="pl-c1">6</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x3f</span>))</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">                   <span class="pl-k">+</span> <span class="pl-c1">fromCharCode</span>(<span class="pl-c1">0x80</span> <span class="pl-k">|</span> ( cc         <span class="pl-k">&amp;</span> <span class="pl-c1">0x3f</span>)));</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> cc <span class="pl-k">=</span> <span class="pl-c1">0x10000</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">+</span> (c.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">0</span>) <span class="pl-k">-</span> <span class="pl-c1">0xD800</span>) <span class="pl-k">*</span> <span class="pl-c1">0x400</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">+</span> (c.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">1</span>) <span class="pl-k">-</span> <span class="pl-c1">0xDC00</span>);</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> (<span class="pl-c1">fromCharCode</span>(<span class="pl-c1">0xf0</span> <span class="pl-k">|</span> ((cc <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">18</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x07</span>))</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">+</span> <span class="pl-c1">fromCharCode</span>(<span class="pl-c1">0x80</span> <span class="pl-k">|</span> ((cc <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">12</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x3f</span>))</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">+</span> <span class="pl-c1">fromCharCode</span>(<span class="pl-c1">0x80</span> <span class="pl-k">|</span> ((cc <span class="pl-k">&gt;&gt;&gt;</span>  <span class="pl-c1">6</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x3f</span>))</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">+</span> <span class="pl-c1">fromCharCode</span>(<span class="pl-c1">0x80</span> <span class="pl-k">|</span> ( cc         <span class="pl-k">&amp;</span> <span class="pl-c1">0x3f</span>)));</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> re_utob <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>D80<span class="pl-c1">0-<span class="pl-cce">\u</span></span>DBFF][<span class="pl-cce">\u</span>DC0<span class="pl-c1">0-<span class="pl-cce">\u</span></span>DFFFF]</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\x</span>0<span class="pl-c1">0-<span class="pl-cce">\x</span></span>7F]</span><span class="pl-pds">/</span>g</span>;</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">utob</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">u</span>) {</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> u.<span class="pl-c1">replace</span>(re_utob, cb_utob);</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">cb_encode</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">ccc</span>) {</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> padlen <span class="pl-k">=</span> [<span class="pl-c1">0</span>, <span class="pl-c1">2</span>, <span class="pl-c1">1</span>][ccc.<span class="pl-c1">length</span> <span class="pl-k">%</span> <span class="pl-c1">3</span>],</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">        ord <span class="pl-k">=</span> ccc.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">0</span>) <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">|</span> ((ccc.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">1</span> <span class="pl-k">?</span> ccc.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">1</span>) <span class="pl-k">:</span> <span class="pl-c1">0</span>) <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">8</span>)</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">|</span> ((ccc.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">2</span> <span class="pl-k">?</span> ccc.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">2</span>) <span class="pl-k">:</span> <span class="pl-c1">0</span>)),</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">        chars <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">            b64chars.<span class="pl-c1">charAt</span>( ord <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">18</span>),</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">            b64chars.<span class="pl-c1">charAt</span>((ord <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">12</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">63</span>),</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">            padlen <span class="pl-k">&gt;=</span> <span class="pl-c1">2</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>=<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> b64chars.<span class="pl-c1">charAt</span>((ord <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">6</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">63</span>),</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">            padlen <span class="pl-k">&gt;=</span> <span class="pl-c1">1</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>=<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> b64chars.<span class="pl-c1">charAt</span>(ord <span class="pl-k">&amp;</span> <span class="pl-c1">63</span>)</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">        ];</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> chars.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> btoa <span class="pl-k">=</span> <span class="pl-c1">global</span>.btoa <span class="pl-k">?</span> <span class="pl-k">function</span>(<span class="pl-smi">b</span>) {</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">global</span>.<span class="pl-c1">btoa</span>(b);</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">b</span>) {</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> b.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">{1,3}</span><span class="pl-pds">/</span>g</span>, cb_encode);</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> _encode <span class="pl-k">=</span> buffer <span class="pl-k">?</span> <span class="pl-k">function</span> (<span class="pl-smi">u</span>) {</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> (u.<span class="pl-c1">constructor</span> <span class="pl-k">===</span> buffer.<span class="pl-c1">constructor</span> <span class="pl-k">?</span> u <span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">buffer</span>(u))</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">        .<span class="pl-c1">toString</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>base64<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">u</span>) { <span class="pl-k">return</span> <span class="pl-c1">btoa</span>(utob(u)) }</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">    ;</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">encode</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">u</span>, <span class="pl-smi">urisafe</span>) {</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-k">!</span>urisafe</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">?</span> _encode(<span class="pl-c1">String</span>(u))</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">:</span> _encode(<span class="pl-c1">String</span>(u)).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[+<span class="pl-cce">\/</span>]</span><span class="pl-pds">/</span>g</span>, <span class="pl-k">function</span>(<span class="pl-smi">m0</span>) {</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> m0 <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>+<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>-<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>_<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">            }).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>=<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">encodeURI</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">u</span>) { <span class="pl-k">return</span> encode(u, <span class="pl-c1">true</span>) };</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// decoder stuff</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> re_btou <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>([</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>[<span class="pl-cce">\x</span>C0-<span class="pl-cce">\x</span>DF][<span class="pl-cce">\x</span>80-<span class="pl-cce">\x</span>BF]<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>[<span class="pl-cce">\x</span>E0-<span class="pl-cce">\x</span>EF][<span class="pl-cce">\x</span>80-<span class="pl-cce">\x</span>BF]{2}<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>[<span class="pl-cce">\x</span>F0-<span class="pl-cce">\x</span>F7][<span class="pl-cce">\x</span>80-<span class="pl-cce">\x</span>BF]{3}<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">    ].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-pds">&#39;</span></span>), <span class="pl-s"><span class="pl-pds">&#39;</span>g<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">cb_btou</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">cccc</span>) {</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">switch</span>(cccc.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">case</span> <span class="pl-c1">4</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> cp <span class="pl-k">=</span> ((<span class="pl-c1">0x07</span> <span class="pl-k">&amp;</span> cccc.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">0</span>)) <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">18</span>)</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">|</span>    ((<span class="pl-c1">0x3f</span> <span class="pl-k">&amp;</span> cccc.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">1</span>)) <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">12</span>)</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">|</span>    ((<span class="pl-c1">0x3f</span> <span class="pl-k">&amp;</span> cccc.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">2</span>)) <span class="pl-k">&lt;&lt;</span>  <span class="pl-c1">6</span>)</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">|</span>     (<span class="pl-c1">0x3f</span> <span class="pl-k">&amp;</span> cccc.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">3</span>)),</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">            offset <span class="pl-k">=</span> cp <span class="pl-k">-</span> <span class="pl-c1">0x10000</span>;</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> (<span class="pl-c1">fromCharCode</span>((offset  <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">10</span>) <span class="pl-k">+</span> <span class="pl-c1">0xD800</span>)</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">+</span> <span class="pl-c1">fromCharCode</span>((offset <span class="pl-k">&amp;</span> <span class="pl-c1">0x3FF</span>) <span class="pl-k">+</span> <span class="pl-c1">0xDC00</span>));</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">case</span> <span class="pl-c1">3</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">fromCharCode</span>(</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">                ((<span class="pl-c1">0x0f</span> <span class="pl-k">&amp;</span> cccc.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">0</span>)) <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">12</span>)</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">|</span> ((<span class="pl-c1">0x3f</span> <span class="pl-k">&amp;</span> cccc.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">1</span>)) <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">6</span>)</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">|</span>  (<span class="pl-c1">0x3f</span> <span class="pl-k">&amp;</span> cccc.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">2</span>))</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">            );</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">default</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span>  <span class="pl-c1">fromCharCode</span>(</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">                ((<span class="pl-c1">0x1f</span> <span class="pl-k">&amp;</span> cccc.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">0</span>)) <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">6</span>)</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">|</span>  (<span class="pl-c1">0x3f</span> <span class="pl-k">&amp;</span> cccc.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">1</span>))</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">            );</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">btou</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">b</span>) {</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> b.<span class="pl-c1">replace</span>(re_btou, cb_btou);</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">cb_decode</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">cccc</span>) {</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> len <span class="pl-k">=</span> cccc.<span class="pl-c1">length</span>,</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">        padlen <span class="pl-k">=</span> len <span class="pl-k">%</span> <span class="pl-c1">4</span>,</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">        n <span class="pl-k">=</span> (len <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> b64tab[cccc.<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>)] <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">18</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">|</span> (len <span class="pl-k">&gt;</span> <span class="pl-c1">1</span> <span class="pl-k">?</span> b64tab[cccc.<span class="pl-c1">charAt</span>(<span class="pl-c1">1</span>)] <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">12</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">|</span> (len <span class="pl-k">&gt;</span> <span class="pl-c1">2</span> <span class="pl-k">?</span> b64tab[cccc.<span class="pl-c1">charAt</span>(<span class="pl-c1">2</span>)] <span class="pl-k">&lt;&lt;</span>  <span class="pl-c1">6</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">|</span> (len <span class="pl-k">&gt;</span> <span class="pl-c1">3</span> <span class="pl-k">?</span> b64tab[cccc.<span class="pl-c1">charAt</span>(<span class="pl-c1">3</span>)]       <span class="pl-k">:</span> <span class="pl-c1">0</span>),</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">        chars <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">fromCharCode</span>( n <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>),</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">fromCharCode</span>((n <span class="pl-k">&gt;&gt;&gt;</span>  <span class="pl-c1">8</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0xff</span>),</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">fromCharCode</span>( n         <span class="pl-k">&amp;</span> <span class="pl-c1">0xff</span>)</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">        ];</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">        chars.<span class="pl-c1">length</span> <span class="pl-k">-=</span> [<span class="pl-c1">0</span>, <span class="pl-c1">0</span>, <span class="pl-c1">2</span>, <span class="pl-c1">1</span>][padlen];</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> chars.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> atob <span class="pl-k">=</span> <span class="pl-c1">global</span>.atob <span class="pl-k">?</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) {</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">global</span>.<span class="pl-c1">atob</span>(a);</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>){</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> a.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">{1,4}</span><span class="pl-pds">/</span>g</span>, cb_decode);</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> _decode <span class="pl-k">=</span> buffer <span class="pl-k">?</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) {</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> (a.<span class="pl-c1">constructor</span> <span class="pl-k">===</span> buffer.<span class="pl-c1">constructor</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">?</span> a <span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">buffer</span>(a, <span class="pl-s"><span class="pl-pds">&#39;</span>base64<span class="pl-pds">&#39;</span></span>)).<span class="pl-c1">toString</span>();</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> btou(<span class="pl-c1">atob</span>(a)) };</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">decode</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>){</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> _decode(</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">String</span>(a).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[-_]</span><span class="pl-pds">/</span>g</span>, <span class="pl-k">function</span>(<span class="pl-smi">m0</span>) { <span class="pl-k">return</span> m0 <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>-<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>+<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span> })</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">                .<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">A-Za-z0-9</span><span class="pl-cce">\+\/</span>]</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">        );</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">noConflict</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> Base64 <span class="pl-k">=</span> <span class="pl-c1">global</span>.Base64;</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">global</span>.Base64 <span class="pl-k">=</span> _Base64;</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> Base64;</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// export Base64</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">global</span>.Base64 <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">        VERSION<span class="pl-k">:</span> version,</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">        atob<span class="pl-k">:</span> atob,</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">        btoa<span class="pl-k">:</span> btoa,</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">        fromBase64<span class="pl-k">:</span> decode,</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">        toBase64<span class="pl-k">:</span> encode,</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">        utob<span class="pl-k">:</span> utob,</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">        encode<span class="pl-k">:</span> encode,</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">        encodeURI<span class="pl-k">:</span> encodeURI,</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">        btou<span class="pl-k">:</span> btou,</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">        decode<span class="pl-k">:</span> decode,</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">        noConflict<span class="pl-k">:</span> noConflict</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// if ES5 is available, make Base64.extendString() available</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-c1">Object</span>.defineProperty <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-en">noEnum</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">v</span>){</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> {value<span class="pl-k">:</span>v,enumerable<span class="pl-k">:</span><span class="pl-c1">false</span>,writable<span class="pl-k">:</span><span class="pl-c1">true</span>,configurable<span class="pl-k">:</span><span class="pl-c1">true</span>};</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">global.Base64</span>.<span class="pl-en">extendString</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">Object</span>.defineProperty(</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">String</span>.<span class="pl-c1">prototype</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>fromBase64<span class="pl-pds">&#39;</span></span>, noEnum(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> decode(<span class="pl-v">this</span>)</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">                }));</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">Object</span>.defineProperty(</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">String</span>.<span class="pl-c1">prototype</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>toBase64<span class="pl-pds">&#39;</span></span>, noEnum(<span class="pl-k">function</span> (<span class="pl-smi">urisafe</span>) {</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> encode(<span class="pl-v">this</span>, urisafe)</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">                }));</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">Object</span>.defineProperty(</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">String</span>.<span class="pl-c1">prototype</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>toBase64URI<span class="pl-pds">&#39;</span></span>, noEnum(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> encode(<span class="pl-v">this</span>, <span class="pl-c1">true</span>)</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">                }));</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// that&#39;s it!</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-c1">global</span>[<span class="pl-s"><span class="pl-pds">&#39;</span>Meteor<span class="pl-pds">&#39;</span></span>]) {</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">       Base64 <span class="pl-k">=</span> <span class="pl-c1">global</span>.Base64; <span class="pl-c">// for normal export in Meteor.js</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">})(<span class="pl-v">this</span>);</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>
  </div>


    </div>

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.04990s from github-fe145-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-fRgMK7V3nst6tdBM6K+ZnnODbc8N8ajES2nGKh3gcy8=" src="https://assets-cdn.github.com/assets/frameworks-7d180c2bb5779ecb7ab5d04ce8af999e73836dcf0df1a8c44b69c62a1de0732f.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-aTN+dVgMlZV0fH5EmPNxsDCOUOjN+MXV3CgBTqokK6w=" src="https://assets-cdn.github.com/assets/github-69337e75580c9595747c7e4498f371b0308e50e8cdf8c5d5dc28014eaa242bac.js"></script>
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

