'use client'
import Image from 'next/image'
import CustomLink from '@/components/markdown/CustomLink';
import {motion} from 'framer-motion';
import {fadeUpVariant} from '@/animations/animations';
import {IWork} from "../../data/portfolio/worksList";
import Link from "next/link";

export default function WorkCard({work}: Readonly<{ work: IWork }>) {
    return (
        <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
            variants={fadeUpVariant(0.2)}
        >
            <motion.div
                className="max-w-full rounded-xs overflow-hidden shadow-md"
                whileHover={{y: -4}}
            >
                <Image
                    src={work.images[0]}
                    alt={work.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{width: '100%', height: 'auto'}} // optional
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{work.title}</div>
                    <p className="text-gray-700 font-light leading-loose">{work.description}</p>
                    <div className="pt-4 flex flex-row gap-5">
                        {work.blogLink !== '' &&
                            <CustomLink href={work.blogLink}>Read blog post</CustomLink>
                        }
                        {work.recommendationLink !== '' &&
                            <CustomLink href={work.recommendationLink}>
                                <Link href={work.recommendationLink} download="adnovum_exit_recommendation_letter"
                                      target="_blank">
                                    Recommendation Letter
                                </Link>
                            </CustomLink>
                        }
                    </div>
                    {/*<div className="pt-4 pb-2">*/}
                    {/*    {project.tags.map((tag) =>*/}
                    {/*        <div key={project.title + tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># {tag}</div>*/}
                    {/*    )}*/}
                    {/*</div>*/}
                </div>
            </motion.div>
        </motion.div>
    );
};
