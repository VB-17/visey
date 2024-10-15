'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  listBusinessFirstStepSchema,
  listBusinessSecondStepSchema,
  listBusinessSchema,
} from '@/schemas';
import { useState } from 'react';
import { Combobox } from '../Combobox';
import {
  tags as tagsList,
  categories as categoriesList,
  locations as locationsList,
  countryCodes as countryCodesList,
} from '@/constants';
import Tag from '../Tag';
import { Stepper } from '../Stepper';
import Required from '../Required';

function splitAndCapitalize(inputString: string) {
  const words = inputString.split('-');
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(' ');
}

const ListBusinessForm = () => {
  const [categoryTagList, setCategoryTagList] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formValues, setFormValues] = useState<
    z.infer<typeof listBusinessSchema>
  >({
    businessName: '',
    registeredName: '',
    websiteUrl: '',
    category: '',
    tags: '',
    stdCode: '',
    contactNumber: '',
    location: '',
  });

  const schema =
    currentStep === 1
      ? listBusinessFirstStepSchema
      : listBusinessSecondStepSchema;

  const defaultValues =
    currentStep === 1
      ? {
          businessName: '',
          registeredName: '',
          websiteUrl: '',
        }
      : {
          category: '',
          tags: '',
          stdCode: '',
          contactNumber: '',
          location: '',
        };

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });

  function onSubmit(values: z.infer<typeof schema>) {
    if (currentStep === 1) {
      setFormValues((prevValues) => ({ ...prevValues, ...values }));
      setCurrentStep(2);
    } else {
      if (categoryTagList.length === 0) {
        form.setError('tags', {
          type: 'manual',
          message: 'At least one tag is required.',
        });
        return;
      }
      setFormValues((prevValues) => ({ ...prevValues, ...values }));

      const backendData = {
        ...formValues,
        ...values,
        tags: categoryTagList,
      };

      console.log(backendData);
    }
  }

  const handleTagChange = (value: string) => {
    value = splitAndCapitalize(value);

    if (value && !categoryTagList.includes(value)) {
      setCategoryTagList((prevTags) => [...prevTags, value]);
    }
  };

  const handleRemoveTag = (tagName: string) => {
    setCategoryTagList((prevTags) => prevTags.filter((tag) => tag !== tagName));
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="lg:w-[540px] w-[320px]">
        <div className="mb-8 mt-2">
          <Stepper currentStep={currentStep} numberOfSteps={2} />
        </div>
        <div className="mb-8">
          <h1 className="text-xl font-semibold text-center">List Business</h1>
          <p className="text-sm text-neutrals-600 text-center">
            To start receiving customer enquires
          </p>
        </div>

        {currentStep === 1 && (
          <Form {...form}>
            <div className="flex flex-col gap-4">
              {/* <FormError message="No account found with this email/ phone number" />
              <FormError message="Incorrect Password" /> */}
            </div>

            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-4 space-y-4"
            >
              <div className="space-y-6 mb-10">
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <div className="flex justify-between">
                          <p className="text-neutrals-600 font-semibold">
                            Business Name*
                          </p>
                          <Required />
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Input className="mt-1" {...field} />
                      </FormControl>
                      <FormMessage />
                      <FormDescription className="text-neutrals-500">
                        This is your profile display name
                      </FormDescription>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="registeredName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <div className="flex justify-between">
                          <p className="text-neutrals-600 font-semibold">
                            Company Registered Name
                          </p>
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Input className="mt-1" {...field} />
                      </FormControl>
                      <FormMessage />
                      <FormDescription className="text-neutrals-500">
                        <span className="block">
                          If business is registered as a company in India
                        </span>
                        <span>
                          Official name as on Certificate of Incorporation
                        </span>
                      </FormDescription>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="websiteUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <div className="flex justify-between">
                          <p className="text-neutrals-600 font-semibold">
                            Website URL
                          </p>
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Input className="mt-1" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="">
                <Button
                  className="w-full rounded-full font-semibold"
                  type="submit"
                >
                  Next
                </Button>
              </div>
            </form>
          </Form>
        )}
        {currentStep === 2 && (
          <Form {...form}>
            <div className="flex flex-col gap-4"></div>

            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-4 space-y-4"
            >
              <div className="space-y-6 mb-10">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <div className="flex justify-between">
                          <p className="text-neutrals-600 font-semibold">
                            Business Category*
                          </p>
                          <Required />
                        </div>
                      </FormLabel>
                      <FormControl>
                        <div className="mt-1">
                          <Combobox
                            value={field.value}
                            data={categoriesList}
                            placeHolder="Select Category"
                            noResultText="No category found"
                            onChange={(value) => field.onChange(value)}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                      <FormDescription className="text-neutrals-500">
                        This is the main category in which your business
                        operates
                      </FormDescription>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <div className="flex justify-between">
                          <p className="text-neutrals-600 font-semibold">
                            Add Category tags*
                          </p>
                          <Required />
                        </div>
                      </FormLabel>
                      <FormControl>
                        <div className="mt-1">
                          <Combobox
                            value={field.value}
                            placeHolder="Select Tag"
                            noResultText="No tag found"
                            data={tagsList}
                            onChange={handleTagChange}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                      <FormDescription className="text-neutrals-500">
                        Add as many that feel relevant, this would help startups
                        to find through keywords
                      </FormDescription>
                    </FormItem>
                  )}
                />
                {categoryTagList.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {categoryTagList.map((tag) => (
                      <Tag key={tag} name={tag} onRemove={handleRemoveTag} />
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-x-2">
                  <FormField
                    control={form.control}
                    name="stdCode"
                    render={({ field }) => (
                      <FormItem className="w-[120px]">
                        <FormLabel>
                          <div className="flex justify-between">
                            <p className="text-neutrals-600 font-semibold">
                              Std Code
                            </p>
                          </div>
                        </FormLabel>
                        <FormControl>
                          <div className="mt-1">
                            <Combobox
                              value={field.value}
                              placeHolder="Code"
                              noResultText="No std code found"
                              sizeLarge={100}
                              sizeSmall={100}
                              data={countryCodesList}
                              onChange={(value) => field.onChange(value)}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>
                          <div className="flex justify-between">
                            <p className="text-neutrals-600 font-semibold">
                              Contact Number*
                            </p>
                            <Required />
                          </div>
                        </FormLabel>
                        <FormControl>
                          <div className="flex items-center">
                            <Input
                              className="mt-1"
                              {...field}
                              value={field.value ?? ''}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <div className="flex justify-between">
                          <p className="text-neutrals-600 font-semibold">
                            Location*
                          </p>
                          <Required />
                        </div>
                      </FormLabel>
                      <FormControl>
                        <div className="mt-1">
                          <Combobox
                            value={field.value}
                            placeHolder="Select State"
                            noResultText="No location found"
                            data={locationsList}
                            onChange={(value) => field.onChange(value)}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                className="w-full rounded-full font-semibold mb-2"
                type="submit"
              >
                List Business
              </Button>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
};

export default ListBusinessForm;