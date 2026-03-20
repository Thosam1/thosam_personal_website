'use client'
import Image from 'next/image'
import CustomLink from '@/components/markdown/CustomLink';
import { useRef, useEffect } from 'react';
import { gsap } from '@/animations/gsapAnimations';
import {IWork} from "../../data/portfolio/worksList";

export default function WorkCard({work}: Readonly<{ work: IWork }>) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    gsap.fromTo(el,
                        { y: 20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
                    )
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div ref={ref} style={{ opacity: 0 }}>
            <div
                className="max-w-full rounded-xs overflow-hidden shadow-md bg-bg-elevated transition-transform duration-200 hover:-translate-y-1"
            >
                <Image
                    src={work.images[0]}
                    alt={work.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{width: '100%', height: 'auto'}}
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-text-primary">{work.title}</div>
                    <p className="font-bold text-l leading-loose text-text-primary">{work.dates}</p>
                    <p className="text-text-secondary font-light leading-loose">{work.description}</p>
                    <div className="pt-4 flex flex-row gap-5">
                        {work.blogLink !== '' &&
                            <CustomLink href={work.blogLink}>Read blog post</CustomLink>
                        }
                        {work.recommendationLink !== '' &&
                            <a
                                href={work.recommendationLink}
                                download="adnovum_exit_recommendation_letter"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent hover:no-underline"
                            >
                                Recommendation Letter
                            </a>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
