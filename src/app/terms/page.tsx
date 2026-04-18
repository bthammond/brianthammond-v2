import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing your use of brianthammond.com — intellectual property, acceptable use, limitations of liability, and governing law.",
};

const LAST_UPDATED = "April 18, 2026";

export default function TermsPage() {
  return (
    <article className="py-20">
      <div className="container-site max-w-3xl">
        <p className="eyebrow mb-4">Terms</p>
        <h1 className="font-serif mb-4">Terms of Use</h1>
        <p className="text-sm text-muted mb-12">Last updated: {LAST_UPDATED}</p>

        <div className="space-y-8 text-lg leading-relaxed">
          <section>
            <p>
              These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and
              use of the website brianthammond.com (the &ldquo;Site&rdquo;),
              operated by Brian T. Hammond (&ldquo;I,&rdquo; &ldquo;me,&rdquo;
              &ldquo;my&rdquo;). By using the Site, you agree to these Terms.
              If you do not agree, please do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">What the Site is</h2>
            <p>
              The Site is an informational and marketing website for the
              consulting practice of Brian T. Hammond. It describes the FAMILY
              Framework, the DESIGN Method, the FAMILY Framework Architecture
              program, and related services. It includes a blog (&ldquo;Insights&rdquo;),
              two self-assessment tools (the Business Diagnostic and the
              Readiness Assessment), and contact forms.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">No advisor-client relationship</h2>
            <p>
              Nothing on the Site creates a consulting, advisory, attorney-client,
              fiduciary, or other professional relationship between you and me.
              A consulting engagement is formed only when both parties sign a
              written engagement letter.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Intellectual property</h2>
            <p>
              All content on the Site — including text, graphics, logos, images,
              the FAMILY Framework, the DESIGN Method, the FAMILY Framework
              Architecture program name and structure, and any proprietary
              methodologies or materials — is owned by Brian T. Hammond and
              protected by United States and international copyright, trademark,
              and other intellectual property laws.
            </p>
            <p className="mt-3">
              You may view and share links to the Site for personal,
              non-commercial purposes. You may not copy, reproduce, republish,
              distribute, modify, or create derivative works from the Site&apos;s
              content without my prior written permission.
            </p>
            <p className="mt-3">
              &ldquo;FAMILY Framework,&rdquo; &ldquo;DESIGN Method,&rdquo; and
              &ldquo;FAMILY by DESIGN&rdquo; are proprietary to Brian T. Hammond.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Acceptable use</h2>
            <p>When you use the Site, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                Use the Site for any unlawful purpose or in violation of these
                Terms.
              </li>
              <li>
                Attempt to gain unauthorized access to the Site, its servers,
                or any systems connected to it.
              </li>
              <li>
                Interfere with the Site&apos;s operation, including via
                automated scraping, denial-of-service attempts, or uploading
                malicious code.
              </li>
              <li>
                Impersonate another person or submit false information through
                any form.
              </li>
              <li>
                Use the Site&apos;s content to train machine-learning models or
                AI systems without my prior written permission.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Information you submit</h2>
            <p>
              When you submit information through the Site (such as via the
              contact form, the Readiness Assessment email capture, or the
              Business Diagnostic), you represent that the information is
              accurate, that you have the right to submit it, and that the
              submission does not violate any third party&apos;s rights.
            </p>
            <p className="mt-3">
              Information you submit is handled according to the{" "}
              <a href="/privacy" className="link-arrow">Privacy Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Disclaimers</h2>
            <p>
              The Site and its content are provided &ldquo;as is&rdquo; and
              &ldquo;as available,&rdquo; without warranties of any kind, whether
              express or implied. I make no warranty that the Site will be
              uninterrupted, error-free, secure, or free of viruses or other
              harmful components.
            </p>
            <p className="mt-3">
              Content on the Site — including blog posts, diagnostic outputs,
              and assessment results — is for informational purposes only and
              is not professional advice. See the{" "}
              <a href="/disclaimer" className="link-arrow">full disclaimer</a>{" "}
              for details.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Brian T. Hammond shall
              not be liable for any indirect, incidental, special, consequential,
              or punitive damages arising out of or related to your use of the
              Site, including (without limitation) damages for lost profits,
              lost revenue, lost data, or business interruption, even if I have
              been advised of the possibility of such damages.
            </p>
            <p className="mt-3">
              My total liability for any claim arising out of or relating to
              the Site is limited to one hundred dollars ($100).
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Brian T. Hammond
              from any claims, damages, liabilities, costs, and expenses
              (including reasonable attorneys&apos; fees) arising from your use
              of the Site, your violation of these Terms, or your violation of
              any third party&apos;s rights.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Third-party links</h2>
            <p>
              The Site may contain links to third-party websites. I do not
              endorse those sites and am not responsible for their content or
              practices.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Changes to the Site and these Terms</h2>
            <p>
              I may modify or discontinue the Site (or any part of it) at any
              time without notice. I may also update these Terms from time to
              time. Updates take effect when posted. Your continued use of the
              Site after an update means you accept the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Governing law</h2>
            <p>
              These Terms are governed by the laws of the State of Maryland,
              without regard to its conflict-of-laws principles. You agree that
              any dispute arising out of or related to these Terms or the Site
              will be brought exclusively in the state or federal courts located
              in Maryland, and you consent to the personal jurisdiction of
              those courts.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Severability</h2>
            <p>
              If any provision of these Terms is held to be unenforceable, the
              remaining provisions will remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Contact</h2>
            <p>
              Questions about these Terms? Reach me at:
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
