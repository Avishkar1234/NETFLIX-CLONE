import React from 'react'

const Footer = () => {
  return (
    <footer className='py-6 md:px-8 md:py-0 bg-black text-white border-t'>
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
                Built by{" "}
            <a
                href="https://github.com/Avishkar1234"
                target='_blank'
                className='font-medium underline underline-offset-4 hover:no-underline'
            >
                you
            </a>
            . The source is available on{" "}
            <a 
                href="https://github.com/Avishkar1234/NETFLIX-CLONE"
                target='_blank'
                rel='noreferrer'
                className='font-medium underline underline-offset-4 hover:no-underline'
            >
                Github
            </a>
            .
            </p>
        </div>
    </footer>
  )
}

export default Footer