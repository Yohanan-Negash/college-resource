'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { RefreshCw, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const QUOTES = [
  'The expert in anything was once a beginner. - Helen Hayes',
  'The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie',
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  'The beautiful thing about learning is that nobody can take it away from you. - B.B. King',
  'Coding is not just code, that is a live thing to serve everyone! - Ming Song',
];

export function MotivationalQuote({ className, ...props }) {
  const [quote, setQuote] = useState('');
  const [displayedQuote, setDisplayedQuote] = useState('');

  const refreshQuote = () => {
    const newQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    setQuote(newQuote);
    setDisplayedQuote('');
  };

  useEffect(() => {
    refreshQuote();
  }, []);

  useEffect(() => {
    if (quote) {
      const timer = setTimeout(() => {
        setDisplayedQuote(quote.slice(0, displayedQuote.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [quote, displayedQuote]);

  return (
    <Card className={className} {...props}>
      <CardContent className='p-4'>
        <div className='flex items-center space-x-2'>
          <Quote className='h-4 w-4 text-muted-foreground' />
          <AnimatePresence mode='wait'>
            <motion.p
              key={quote}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='text-sm italic flex-1 min-h-[3rem]'
            >
              {displayedQuote}
            </motion.p>
          </AnimatePresence>
          <Button
            variant='ghost'
            size='icon'
            onClick={refreshQuote}
            className='shrink-0'
          >
            <RefreshCw className='h-4 w-4' />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
