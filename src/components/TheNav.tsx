{/* <script setup lang="ts">
import { isDark, isDebug, toggleDark, toggleDebug } from '~/composables'
</script> */}
import { Link } from 'react-router-dom'
import React from 'react'
export default function TheNav() {
  return (
    <nav
      px="8" py="4" mb="4"
      border="b gray-400/10"
      flex="~ gap-2"
      bg="white"
      text="xl [#374751]" items="center"
    >
      <Link to="/" flex="~ gap-2" items-center>
        {/* <img src="/favicon.svg" h-10 /> */}
        <div className="font-mono text-center  mr-6 text-md">
          React Starport
        </div>
      </Link>

      <div className="flex-auto" />

      <div flex="~ gap-4" items="center">
        {/* <button
          className="icon-btn !outline-none p-1"
        >
          <div className="i-carbon-debug" />
        </button> */}
        <a
          className="icon-btn i-carbon-logo-github"
          
          rel="noreferrer"
          href="https://github.com/hnustwjj/react-starport"
          target="_blank"
          title="GitHub"
        />
      </div>
    </nav>
  )
}
