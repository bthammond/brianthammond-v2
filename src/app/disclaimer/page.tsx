import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "The content on brianthammond.com is educational and for general informational purposes — not legal, financial, tax, or individualized business advice.",
};

const LAST_UPDATED = "April 18, 2026";

export default function DisclaimerPage() {
  return (
    <article className="py-20">
      <div className="container-site max-w-3xl">
        <p className="eyebrow mb-4">Disclaimer</p>
        <h1 className="font-serif mb-4">Disclaimer</h1>
        <p className="text-sm text-muted mb-12">Last updated: {LAST_UPDATED}</p>

        <div className="space-y-8 text-lg leading-relaxed">
          <section>
            <p>
              The content published on brianthammond.com — including blog posts,
              essays, framework descriptions, assessments, and any other
              materials — is for general educational and informational purposes
              only. It is not, and should not be interpreted as, professional
              advice of any kind.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Not professional advice</h2>
            <p>
              Nothing on this Site constitutes legal, financial, tax, accounting,
              investment, regulatory, psychological, or medical advice. The
              content reflects the personal views and experience of Brian T.
              Hammond based on general patterns across businesses he has
              advised. It is not tailored to your specific business, family,
              financial situation, or circumstances.
            </p>
            <p className="mt-3">
              Before making any significant business, financial, legal, or
              personal decision, consult a licensed professional in the
              relevant field.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">No advisor-client relationship</h2>
            <p>
              Reading content on this Site, taking an assessment, subscribing to
              the newsletter, or submitting a contact form does not create a
              consulting, advisory, attorney-client, fiduciary, or other
              professional relationship between you and Brian T. Hammond.
            </p>
            <p className="mt-3">
              An advisory engagement is established only after both parties
              sign a written engagement letter.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Results and outcomes</h2>
            <p>
              Any outcomes described on the Site — including expected milestones,
              case study results, and testimonials (when present) — reflect the
              experience of specific clients and are not guarantees or
              predictions of what will happen in your business. Results depend
              on many factors outside my control, including your execution,
              market conditions, and the specifics of your business.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Assessments are not diagnoses</h2>
            <p>
              The Business Diagnostic and the Readiness Assessment are
              self-reporting tools designed to prompt reflection. They are not
              professional evaluations, business valuations, or diagnoses of
              any kind. Scores and band placements are indicative only. They
              do not substitute for expert evaluation of your business or
              personal situation.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Accuracy of information</h2>
            <p>
              I work to keep the Site accurate and current, but I make no
              representation or warranty about the completeness, accuracy,
              reliability, or suitability of any information on the Site.
              Content may change without notice. Any reliance you place on
              Site content is strictly at your own risk.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Third-party content and links</h2>
            <p>
              The Site may reference or link to third-party websites, books,
              tools, or services. Those references are not endorsements.
              Brian T. Hammond is not responsible for the content, accuracy,
              or practices of any third party.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">No liability</h2>
            <p>
              To the fullest extent permitted by law, Brian T. Hammond is not
              liable for any direct, indirect, incidental, consequential, or
              special damages arising from your use of — or inability to use —
              this Site or any of its content.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Questions</h2>
            <p>
              If you have questions about this disclaimer or the material on
              the Site, reach me at:
            </p>
            <address className="not-italic mt-3">
              Brian T. Hammond
              <br />
              Email:{" "}
              <a href="mailto:brian@brianthammond.com" className="link-arrow">
                brian@brianthammond.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:18004282424" className="link-arrow">
                1.800.428.2424
              </a>
            </address>
          </section>
        </div>
      </div>
    </article>
  );
}
