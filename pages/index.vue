<template>
  <div>
    <div class="py-16 min-h-screen bg-gray-50 overflow-hidden lg:py-24">
      <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
          <defs>
            <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>

        <div class="relative">
          <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Image analysis on upload
          </h2>
          <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            Upload an image using the form below to receive a comprehensive analysis
          </p>
        </div>

        <div class="relative mt-12 lg:mt-24">

          <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">

            <!-- Upload form  -->
            <div class="md:w-1/3 mx-auto bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form @submit.prevent="upload" class="space-y-6">
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700"> Image </label>
                  <div class="mt-1">
                    <input  
                      required 
                      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      @change="changeFile" 
                      name="file" 
                      type="file"
                    />
                  </div>
                </div>


                <div>
                  <button 
                    v-if="!uploading"
                    type="submit" 
                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Upload & Analyse
                    </button>
                    <p v-else>Uploading...</p>
                </div>
              </form>
            </div>
            <!-- End of upload form  -->
          

            <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
              <defs>
                <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
            </svg>
          
          </div>
        </div>

        <svg class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
          <defs>
            <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>

        <div v-if="cloudinaryImage" class="relative mt-12 sm:mt-16 lg:mt-24">
          <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="lg:col-start-2">
              <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Image analysis</h3>
        
              <div class="mt-5 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Format</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ cloudinaryImage.format }}</td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Dimensions</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ cloudinaryImage.width }} x {{ cloudinaryImage.height }}</td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Size</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ cloudinaryImage.bytes }} Bytes</td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Quality score</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ cloudinaryImage.quality_score }} </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Focus</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ cloudinaryImage.quality_analysis.focus }} </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Noise</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ cloudinaryImage.quality_analysis.noise }} </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Contrast</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ cloudinaryImage.quality_analysis.contrast }}</td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Exposure</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ cloudinaryImage.quality_analysis.exposure }} </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Saturation</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ cloudinaryImage.quality_analysis.saturation }} </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Lighting</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ cloudinaryImage.quality_analysis.lighting }} </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pixel score</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ cloudinaryImage.quality_analysis.pixel_score }} </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Color score</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ cloudinaryImage.quality_analysis.color_score }} </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">DCT</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ cloudinaryImage.quality_analysis.dct }} </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Blockiness</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ cloudinaryImage.quality_analysis.blockiness }} </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Chroma subsampling</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ cloudinaryImage.quality_analysis.chroma_subsampling }} </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Resolution</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ cloudinaryImage.quality_analysis.resolution }} </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>

            <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
                <defs>
                  <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
              </svg>

              <img 
                class="relative mx-auto" 
                width="490" 
                :src="cloudinaryImage.secure_url" 
                alt="Image" 
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      image: null,
      uploading:false,
      cloudinaryImage: null
    }
  },
  methods:{
    changeFile(e){
      this.image = e.target.files[0]
    },
    async upload(e){
      this.uploading = true;
      const url = '/api/upload';
      const formData = new FormData();
      formData.append('file',this.image);
      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      }
      const response = await this.$axios.$post(url,formData,config);
      console.log(response);
      this.cloudinaryImage = response;
      this.uploading = false;
    }
  }
}
</script>
