import Head from "next/head";

const Page = () => (
  <div>
    <Head>
      <title>Privacy Policy | FloofAI</title>
    </Head>
    <div className="bg-white text-black m-auto max-w-5xl px-3 pt-20 pb-16 w-100">
      <div className="text-4xl font-bold b mt-4 mb-4">Privacy Policy</div>
      <div className="text-gray-500 mb-4 lh-copy">
        This privacy policy governs the manner in which Floof AI collects, uses,
        maintains, and discloses information collected from users (each, a
        &quot;User&quot;) of the Floof AI mobile app (&quot;App&quot;),
        hereafter referred to in this Privacy Policy as &quot;Floof AI&quot;,
        &quot;us&quot;, &quot;our&quot; or &quot;we.&quot; For the purposes of
        this Agreement and our Terms of Service, any use of the terms
        &quot;Floof AI&quot;, &quot;us&quot;, &quot;our&quot; or &quot;we&quot;
        includes Lofi Labs LLC, without limitation. This Privacy Policy is
        incorporated by reference in the Lofi Labs Terms of Service, which
        govern your use of our Services. We use your data to provide and improve
        Service. By using Service, you agree to the collection and use of
        information in accordance with this policy.
      </div>
      <div className="text-gray-500 mb-4 lh-copy">
        The following statement discloses the guidelines Lofi Labs has
        established for protecting the information you provide to us during your
        visit to the site and while using the app.
      </div>
      <div className="font-bold text-2xl mb-4 mt-8">1. Data we collect</div>
      <div className="font-bold text-xl mb-2 mt-6">User Data</div>
      <div className="text-gray-500 mb-4 lh-copy">
        When you use the Floof AI app, a unique, anonymous identifier is created
        for you. We use this identifier to provide the services of the app. We
        never use device or user data for marketing and never share this data
        with any third party service.
      </div>
      <div className="font-bold text-2xl mb-4 mt-8">
        2. Data you provide to us
      </div>
      <div className="font-bold text-xl mb-2 mt-6">Uploaded Images</div>
      <div className="text-gray-500 mb-4 lh-copy">
        When using the Floof AI service, you have to upload 10-20 photos of your
        pet. These photos are stored on our service. All images are deleted
        automatically after 3 days. If at any point you would like to have your
        data deleted sooner, you may contact us at jake@getstreamkit.com to have
        any images you&apos;ve uploaded removed sooner than 3 days.
      </div>
      <div className="text-gray-500 mb-4 lh-copy">
        Floof AI is only intended to be used for generating images of dogs.{" "}
        <b>
          Uploading images of anything other than a dog, especially a person of
          any age, is strictly prohibited.{" "}
        </b>
        If you are found to have uploaded an image of a person to our service,
        the image will be removed immediately and you may be banned from using
        the service.
      </div>
      <div className="font-bold text-2xl mb-4 mt-8">
        3. How your data is used
      </div>
      <div className="text-gray-500 mb-4 lh-copy">
        The image data you upload to Floof AI is used to train an AI model using
        a third party service called Replicate (https://www.replicate.com).
        Replicate uses the trained AI model to generate the images you&apos;ve
        purchased and makes them available through the app.
        <br />
        <br />
        When you select to purchase AI generated images in Floof AI your data is
        used in the following way:
        <ol className="list-decimal pl-12 my-4">
          <li>
            Images uploaded by you to Floof AI are shared with Replicate&apos;s
            services through a temporary link.
          </li>
          <li>
            Replicate processes the uploaded images to train an AI model. The AI
            model is stored on their server.
          </li>
          <li>
            Once Replicate has trained the AI model, Floof AI revokes their
            access to your uploaded images and deletes them from our server.
          </li>
          <li>
            Replicate uses the AI model to generate the images you&apos;ve
            purchased. These images are stored on their server.
          </li>
          <li>
            After 90 days, we send a request to Replicate to remove all data for
            the AI model and the images it has generated from their service.
          </li>
        </ol>
        Please read the next section on what data Replicate retains and how it
        stores and uses this data.
      </div>
      <div className="font-bold text-2xl mb-4 mt-8">
        4. Replicate (3rd party service) Data Policies and Usage
      </div>
      <div className="text-gray-500 mb-4 lh-copy">
        As outlined above, in order to provide our service we use a 3rd party
        service called Replicate to train an AI model. This model is then used
        to generate your purchased images.
        <br />
        <br />
        Replicate uses the image data we provide with it to train an AI model.
        This AI model is used to generate the images you&&apos;ve purchased
        through Floof AI
        <br />
        <br />
        Replicate stores the data that makes up this model as well as the
        generated images on its own servers.
        <br />
        <br />
        Replicate will retain data related to the model and any images it
        generates until a user requests to have their data removed from the
        service. Floof AI proactively sends a request to delete all data older
        than 90 days from Replicates servers, including AI models and generated
        images.
        <br />
        <br />
        In addition, according to their privacy policy:
        <br />
        <br />
        &quot;Replicate will take all the steps reasonably necessary to ensure
        that your data is treated securely and in accordance with [their]
        Privacy Policy no transfer of your Personal Data will take place to an
        organisation or a country unless there are adequate controls in place
        including the security of your data and other personal
        information.&quot;
        <br />
        <br />
        You can find the entire Replicate privacy policy here:{" "}
        <a className="underline" href="https://replicate.com/privacy">
          https://replicate.com/privacy
        </a>
        .
      </div>
      <div className="font-bold text-2xl mb-4 mt-8">5. Data Retention</div>
      <div className="text-gray-500 mb-4 lh-copy">
        Uploaded images are automatically deleted after 3 days. We store data
        for 3 days for the following reasons:
        <ul className="list-disc pl-12 my-4">
          <li>
            To ensure that upon purchase, the AI model will have enough time to
            be generated before the images are deleted.
          </li>
          <li>
            To allow us to investigate and debug any issues if they come up
            during model or image generation.
          </li>
          <li>
            To allow us to provide a better user experience if you upload images
            and navigate away from the app before making a purchase.
          </li>
        </ul>
        If at any point you would like to have your data deleted sooner, you may
        contact us at jake@getstreamkit.com to have any images you&apos;ve
        uploaded removed sooner than 3 days.
        <br />
        <br />
        We proactively reach out to Replicate to delete all data associated with
        you that is more than 90 days old, however we can do this sooner if you
        reach out to us.
      </div>
      <div className="font-bold text-2xl mb-4 mt-8">6. Security</div>
      <div className="text-gray-500 mb-4 lh-copy">
        While we continue to work hard to protect your data, no transmission
        over the Internet can be guaranteed to be absolutely secure, and we
        cannot ensure or warrant the security of any information you transmit to
        Lofi Labs. Transmitting personal information is done at your own risk.
        <br />
        <br />
        At any point a user may reach out to Floof AI support and have their
        data removed from our services.
      </div>
      <div className="font-bold text-2xl mb-4 mt-8">
        Change to this privacy policy
      </div>
      <div className="text-gray-500 mb-4 lh-copy">
        Lofi Labs has the discretion to update this privacy policy at any time.
        When we do, we will revise the updated date at the bottom of this page.
        We encourage Users to frequently check this page for any changes to stay
        informed about how we are helping to protect the personal information we
        collect. You acknowledge and agree that it is your responsibility to
        review this privacy policy periodically and become aware of
        modifications.
      </div>
      <div className="text-gray-500 mb-4 lh-copy">
        By registering for your account, and by accessing or using our services,
        you consent to the collection, transfer, manipulation, storage,
        disclosure and other uses of your information (collectively, &quot;use
        of your information&quot;) as described in this privacy policy. If you
        do not or no longer agree with or consent to this privacy policy you may
        not access or use our services.
      </div>
      <div className="font-bold text-xl mb-2 mt-8">Questions?</div>
      <div className="text-gray-500 mb-4 lh-copy">
        Send an email to jake@getstreamkit.com with any questions related to the
        privacy policy or the terms of service.
      </div>
      <div className="text-gray-600 mb-4 lh-copy">
        Last updated Jan 9th, 2022
      </div>
    </div>
  </div>
);

export default Page;
