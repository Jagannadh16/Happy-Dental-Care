import React from 'react';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { motion } from 'motion/react';

export const SmileGallery = () => {
    const transformations = [
        {
            title: "Teeth Whitening",
            beforeLabel: "Before",
            afterLabel: "After Whitening",
            beforeImage: "/Teeth before whitening.png",
            afterImage: "/teeth after whitening.png"
        },
        {
            title: "Root Canal",
            beforeLabel: "Before",
            afterLabel: "After",
            beforeImage: "before-root-canal.png",
            afterImage: "after-root-canal.png"
        },
        {
            title: "Orthodontics",
            beforeLabel: "Original Smile",
            afterLabel: "New Smile",
            beforeImage: "orthodonics-before.png",
            afterImage: "orthodonics-after.png"
        }
    ];

    return (
        <section className="section-padding bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block"
                    >
                        Transformations
                    </motion.span>
                    <h2 className="heading-md mb-4">Smile Gallery</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        See the real difference our advanced dental treatments can make. Drag the sliders to compare before and after results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {transformations.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col gap-4"
                        >
                            <BeforeAfterSlider
                                beforeImage={item.beforeImage}
                                afterImage={item.afterImage}
                                beforeLabel={item.beforeLabel}
                                afterLabel={item.afterLabel}
                            />
                            <h3 className="text-xl font-bold text-secondary text-center">{item.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
