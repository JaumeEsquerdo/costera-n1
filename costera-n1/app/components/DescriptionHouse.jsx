import { useI18n } from "../hooks/usei18n";

export const DescriptionHouse = () => {
  const { t } = useI18n();

  const textsDescriptionHouse = t.Home.DescriptionHouse;

  return (
    <section className="h-screen flex flex-col justify-center items-center p-8 lg:pt-26">
      <h3 className="text-2xl font-bold mb-8 text-center">
        {textsDescriptionHouse.title}
      </h3>
      <div className="flex flex-col gap-4 lg:max-w-1/2 [@media(max-height:720px)]:text-sm">
        <p dangerouslySetInnerHTML={{ __html: textsDescriptionHouse.p1 }} />
        <p dangerouslySetInnerHTML={{ __html: textsDescriptionHouse.p2 }} />
        <p dangerouslySetInnerHTML={{ __html: textsDescriptionHouse.p3 }} />
        <p dangerouslySetInnerHTML={{ __html: textsDescriptionHouse.p4 }} />
      </div>
    </section>
  );
};
