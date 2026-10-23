import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import justine from '../images/justine.jpg';
import da from '../images/da.jpeg';
import '../styles/Testimonials.scss';

const TESTIMONIALS = [
    {
        photo: justine,
        name: 'Justine Berger',
        title: 'COO, Social Art House',
        quote: 'Lachlan is the Social Art House go-to Web Developer for all projects. He’s fast, thorough, and able to manage the complexity of any request. Thanks to his dynamic design implementation, user experience, and SEO programs, our brand website and clients are top-performing, engaging, and responsive. I would recommend working with Lachlan to anyone!',
    },
    {
        photo: da,
        name: 'Da Kornchamraskul',
        title: 'UI/UX Designer, Originator Inc.',
        quote: 'Lachlan is a talented, humble and friendly web developer who is able to add magic to any product. He’s fast, thorough and in my opinion one of the best developers I have worked with. I always enjoy doing work with him!',
    },
];

const SWIPE_DISTANCE = 60;   // px
const SWIPE_VELOCITY = 400;  // px/s

const variants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function Testimonials() {
    const [[index, direction], setPage] = useState([0, 0]);
    const count = TESTIMONIALS.length;

    const paginate = useCallback((dir) => {
        setPage(([i]) => [(i + dir + count) % count, dir]);
    }, [count]);

    const goTo = (i) => setPage(([cur]) => [i, i > cur ? 1 : -1]);

    // keyboard arrows when the slider has focus
    const onKeyDown = (e) => {
        if (e.key === 'ArrowRight') paginate(1);
        if (e.key === 'ArrowLeft') paginate(-1);
    };

    const onDragEnd = (_, info) => {
        const { offset, velocity } = info;
        if (offset.x < -SWIPE_DISTANCE || velocity.x < -SWIPE_VELOCITY) paginate(1);
        else if (offset.x > SWIPE_DISTANCE || velocity.x > SWIPE_VELOCITY) paginate(-1);
    };

    const t = TESTIMONIALS[index];

    return (
        <section id='testimonials'>
            <div className='container'>
                <h2>Testimonials</h2>
                <h3>Hear what people have to say about working with us.</h3>

                <div className='slider' role='region' aria-roledescription='carousel' aria-label='Client testimonials' tabIndex={0} onKeyDown={onKeyDown}>
                    <button type='button' className='arrow prev' onClick={() => paginate(-1)} aria-label='Previous testimonial'>
                        <svg viewBox='0 0 24 24' aria-hidden='true'><path d='M15 18l-6-6 6-6' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'/></svg>
                    </button>

                    <div className='viewport'>
                        <AnimatePresence initial={false} custom={direction} mode='wait'>
                            <motion.div
                                key={index}
                                className='card'
                                custom={direction}
                                variants={variants}
                                initial='enter'
                                animate='center'
                                exit='exit'
                                transition={{ x: { type: 'spring', stiffness: 320, damping: 32 }, opacity: { duration: 0.18 } }}
                                drag='x'
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.6}
                                onDragEnd={onDragEnd}
                                aria-live='polite'
                            >
                                <img src={t.photo} alt={`${t.name} headshot`} draggable='false' />
                                <h3>{t.name}</h3>
                                <h4>{t.title}</h4>
                                <p><q>{t.quote}</q></p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button type='button' className='arrow next' onClick={() => paginate(1)} aria-label='Next testimonial'>
                        <svg viewBox='0 0 24 24' aria-hidden='true'><path d='M9 6l6 6-6 6' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'/></svg>
                    </button>
                </div>

                <div className='dots' role='tablist' aria-label='Choose testimonial'>
                    {TESTIMONIALS.map((item, i) => (
                        <button
                            key={item.name}
                            type='button'
                            role='tab'
                            aria-selected={i === index}
                            aria-label={`Testimonial ${i + 1}: ${item.name}`}
                            className={i === index ? 'dot active' : 'dot'}
                            onClick={() => goTo(i)}
                        />
                    ))}
                </div>
                <p className='hint' aria-hidden='true'>Swipe or use the arrows to see more</p>
            </div>
        </section>
    );
}
