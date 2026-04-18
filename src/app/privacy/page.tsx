import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Brian T. Hammond collects, uses, and protects personal information submitted through brianthammond.com.",
};

const LAST_UPDATED = "April 18, 2026";

export default function PrivacyPage() {
  return (
    <article className="py-20">
      <div className="container-site max-w-3xl">
        <p className="eyebrow mb-4">Privacy</p>
        <h1 className="font-serif mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted mb-12">Last updated: {LAST_UPDATED}</p>

        <div className="space-y-8 text-lg leading-relaxed">
          <section>
            <p>
              Brian T. Hammond (&ldquo;I,&rdquo; &ldquo;me,&rdquo; or &ldquo;my&rdquo;)
              operates brianthammond.com (the &ldquo;Site&rdquo;). This page tells
              you what information the Site collects, how that information is used,
              and what choices you have about it.
            </p>
            <p>
              By using the Site, you consent to the practices described below.
              If you do not agree, please do not use the Site or submit information
              through it.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Information I collect</h2>
            <p>
              I collect information you voluntarily provide when you use the Site:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Contact form submissions</strong> — when you fill out the
                contact form, I collect your name, email address, phone number
                (optional), company (optional), the service you&apos;re interested in,
                and the message you write.
              </li>
              <li>
                <strong>Diagnostic and Readiness Assessment responses</strong> —
                if you choose to share your results, I collect your email address
                and the results you submit (scores and pillar breakdowns).
              </li>
              <li>
                <strong>Automatic information</strong> — when you visit the Site,
                I receive aggregate analytics about pages viewed, approximate
                geographic region, device type, and referring URL. This analytics
                data is provided by Vercel Analytics and does not use cookies or
                fingerprinting.
              </li>
            </ul>
            <p className="mt-3">
              I do not knowingly collect information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">How I use your information</h2>
            <p>I use the information you submit to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Respond to your inquiry and schedule consultations.</li>
              <li>
                Send you the materials you request (for example, a summary of
                your diagnostic results).
              </li>
              <li>Improve the Site and understand how it&apos;s used.</li>
              <li>Comply with legal obligations.</li>
            </ul>
            <p className="mt-3">
              I do not sell your personal information. I do not share it with
              third parties for their marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Service providers</h2>
            <p>
              I use a small number of third-party services that process information
              on my behalf:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Formspree</strong> — processes contact form and diagnostic
                submissions. Formspree&apos;s privacy policy is available at
                formspree.io/legal/privacy-policy.
              </li>
              <li>
                <strong>Vercel</strong> — hosts the Site and provides cookieless
                analytics. Vercel&apos;s privacy policy is available at
                vercel.com/legal/privacy-policy.
              </li>
              <li>
                <strong>GitHub</strong> — stores the Site&apos;s source code.
                Does not process visitor data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Cookies and tracking</h2>
            <p>
              The Site does not use advertising cookies or cross-site tracking.
              The analytics provider (Vercel Analytics) is cookieless by design
              and does not identify individual visitors.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">How long I keep your information</h2>
            <p>
              Contact form submissions are retained for as long as I may reasonably
              need them to respond to you and maintain records of our correspondence.
              You can request deletion at any time by emailing{" "}
              <a href="mailto:brian@brianthammond.com" className="link-arrow">
                brian@brianthammond.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Your rights</h2>
            <p>
              Depending on where you live, you may have the right to request
              access to the personal information I hold about you, correct it,
              or ask me to delete it. To make a request, email{" "}
              <a href="mailto:brian@brianthammond.com" className="link-arrow">
                brian@brianthammond.com
              </a>{" "}
              with your request. I&apos;ll respond within a reasonable time.
            </p>
            <p className="mt-3 text-sm text-ink-soft">
              California residents have additional rights under the California
              Consumer Privacy Act (CCPA), including the right to know what
              personal information is collected and the right to opt out of
              its sale. I do not sell personal information.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Security</h2>
            <p>
              I use reasonable administrative and technical safeguards to protect
              the information you submit. All connections to the Site use HTTPS.
              No system is perfectly secure, however, and I cannot guarantee the
              security of information transmitted online.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Third-party links</h2>
            <p>
              The Site may contain links to third-party websites. I am not
              responsible for the privacy practices of those sites. Review their
              privacy policies before providing information to them.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Changes to this policy</h2>
            <p>
              I may update this policy from time to time. When I do, I&apos;ll
              revise the &ldquo;Last updated&rdquo; date at the top of the page.
              Material changes will be noted prominently on the Site.
            </p>
          </section>

          <section>
            <h2 className="font-serif mt-6 mb-4">Contact</h2>
            <p>
              Questions about this policy or how your information is handled?
              Reach me at:
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
