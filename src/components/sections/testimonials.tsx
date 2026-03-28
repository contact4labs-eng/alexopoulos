import { ExternalLink, Quote } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/section';
import { StarRating } from '@/components/ui/star-rating';
import { testimonials, testimonialConfig } from '@/data/testimonials';

interface TestimonialsProps {
  limit?: number;
}

export function Testimonials({ limit }: TestimonialsProps) {
  const { googleRating, googleReviewCount, googleMapsReviewUrl, showEmptyState } = testimonialConfig;
  const displayed = limit ? testimonials.slice(0, limit) : testimonials;

  if (showEmptyState) {
    return (
      <Section background="white">
        <SectionHeader title="Τι Λένε οι Μαθητές μας" eyebrow="Κριτικές" />
        <div className="mx-auto max-w-lg text-center">
          <StarRating rating={googleRating} size="lg" className="justify-center mb-6" />
          <p className="text-5xl font-extrabold text-[#1A1A1A]">{googleRating}/5</p>
          <p className="mt-3 text-[#6B7280]">{googleReviewCount}+ αξιολογήσεις Google</p>
          <a
            href={googleMapsReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#1A1A1A] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#3C3C3C]"
          >
            Δείτε τις Κριτικές στο Google
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Section>
    );
  }

  return (
    <Section background="mist">
      <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
        {/* Left: proof summary — sticky on desktop */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#E31E24]">
            Κριτικές
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
            Τι Λένε οι<br />Μαθητές μας
          </h2>

          {/* Rating block */}
          <div className="mt-8 rounded-2xl border border-[#D4D4D4] bg-white p-6">
            <div className="flex items-end gap-3">
              <span className="text-5xl font-extrabold text-[#1A1A1A]">{googleRating}</span>
              <div className="mb-1.5">
                <StarRating rating={googleRating} size="sm" />
                <p className="mt-1 text-xs text-[#6B7280]">{googleReviewCount}+ κριτικές Google</p>
              </div>
            </div>
          </div>

          <a
            href={googleMapsReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#E31E24] hover:text-[#C41A1F] transition-colors"
          >
            Δείτε όλες στο Google
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Right: masonry-style testimonial cards */}
        <div className="columns-1 gap-5 sm:columns-2">
          {displayed.map((t, i) => (
            <blockquote
              key={i}
              className="mb-5 break-inside-avoid rounded-2xl border border-[#D4D4D4] bg-white p-6 transition-all duration-200 hover:border-[#E31E24]/30 hover:shadow-[0_4px_20px_-8px_rgba(26,26,26,0.1)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <StarRating rating={t.rating} size="sm" />
                <Quote className="h-5 w-5 text-[#ECEEF0]" aria-hidden="true" />
              </div>
              <p className="text-[15px] leading-relaxed text-[#6B7280]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1A1A1A] text-xs font-bold text-white">
                  {t.authorName.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-[#1A1A1A]">{t.authorName}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </Section>
  );
}
