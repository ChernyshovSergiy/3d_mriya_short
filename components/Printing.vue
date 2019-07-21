<template>
    <v-container id="Printing" class="pt-5">
        <v-layout align-center justify-space-between row wrap fill-height>
            <v-flex xs12 md6 block text-xs-right>
                <v-card flat color="transparent">
                    <v-card-title primary class="display-2 text-capitalize">
                        {{ title }}
                    </v-card-title>
                    <v-card-text class="subheading elevation-2 pa-1">
                        <v-responsive>
                            <v-img
                                :src="
                                    require('@/assets/images/convert_cube.svg')
                                "
                                width="auto"
                            >
                                <v-layout
                                    align-center
                                    justify-center
                                    fill-height
                                    pa-3
                                    black--text
                                >
                                    <v-card-text>
                                        <v-form
                                            ref="form"
                                            v-model="valid"
                                            lazy-validation
                                        >
                                            <v-layout
                                                row
                                                wrap
                                                align-space-around
                                                fill-height
                                            >
                                                <v-flex xs12 md6>
                                                    <v-text-field
                                                        v-model.trim="form.name"
                                                        prepend-icon="person"
                                                        name="name"
                                                        :label="`${$t('name')}`"
                                                        type="name"
                                                        :rules="nameRules"
                                                        :counter="20"
                                                        data-cy="joinNameField"
                                                        required
                                                    >
                                                    </v-text-field>
                                                </v-flex>
                                                <v-flex xs12 md6>
                                                    <v-text-field
                                                        v-model.trim="
                                                            form.email
                                                        "
                                                        prepend-icon="email"
                                                        name="email"
                                                        :label="
                                                            `${$t('email')}`
                                                        "
                                                        type="email"
                                                        :rules="emailRules"
                                                        data-cy="joinEmailField"
                                                        required
                                                        autocomplete="email"
                                                    >
                                                    </v-text-field>
                                                </v-flex>
                                            </v-layout>
                                            <v-layout
                                                row
                                                wrap
                                                align-space-around
                                                fill-height
                                            >
                                                <v-flex xs11>
                                                    <v-text-field
                                                        v-model.trim="form.link"
                                                        prepend-icon="link"
                                                        name="link"
                                                        :label="
                                                            `${$t(
                                                                'link_printing_order'
                                                            )}`
                                                        "
                                                        type="link"
                                                        required
                                                        :rules="linkRules"
                                                        data-cy="LinkField"
                                                        autocomplete="link"
                                                    >
                                                    </v-text-field>
                                                </v-flex>
                                                <v-flex xs1 class="mt-3">
                                                    <v-spacer />
                                                    <v-tooltip
                                                        bottom
                                                        max-width="500px"
                                                    >
                                                        <template
                                                            v-slot:activator="{
                                                                on
                                                            }"
                                                        >
                                                            <span v-on="on">
                                                                <v-avatar
                                                                    size="30"
                                                                    color="grey lighten-4"
                                                                    class="elevation-5"
                                                                >
                                                                    <v-icon
                                                                        :style="{
                                                                            cursor:
                                                                                'pointer'
                                                                        }"
                                                                        large
                                                                        color="indigo darken-4"
                                                                        >help</v-icon
                                                                    >
                                                                </v-avatar></span
                                                            >
                                                        </template>
                                                        <span class="body-1">{{
                                                            $t(
                                                                'desc_google_stl'
                                                            )
                                                        }}</span>
                                                    </v-tooltip>
                                                </v-flex>
                                            </v-layout>
                                            <template>
                                                <v-layout
                                                    v-show="!other"
                                                    row
                                                    wrap
                                                    align-space-around
                                                    fill-height
                                                >
                                                    <v-flex xs11>
                                                        <v-select
                                                            v-model="form.size"
                                                            :hint="
                                                                `${
                                                                    form.size
                                                                        .value
                                                                }, ${
                                                                    form.size.id
                                                                }`
                                                            "
                                                            prepend-icon="aspect_ratio"
                                                            :items="sizes"
                                                            item-text="value"
                                                            item-value="id"
                                                            :rules="sizesRules"
                                                            :label="
                                                                `${$t('size')}`
                                                            "
                                                            required
                                                            persistent-hint
                                                            return-object
                                                            single-line
                                                        ></v-select>
                                                    </v-flex>
                                                    <v-flex xs1 class="mt-3">
                                                        <v-spacer />
                                                        <v-tooltip
                                                            bottom
                                                            max-width="500px"
                                                        >
                                                            <template
                                                                v-slot:activator="{
                                                                    on
                                                                }"
                                                            >
                                                                <span v-on="on">
                                                                    <v-avatar
                                                                        size="30"
                                                                        color="grey lighten-4"
                                                                        class="elevation-5"
                                                                    >
                                                                        <v-icon
                                                                            :style="{
                                                                                cursor:
                                                                                    'pointer'
                                                                            }"
                                                                            large
                                                                            color="indigo darken-4"
                                                                            >help</v-icon
                                                                        >
                                                                    </v-avatar></span
                                                                >
                                                            </template>
                                                            <span
                                                                class="body-1"
                                                                >{{
                                                                    $t(
                                                                        'measure_miniature'
                                                                    )
                                                                }}</span
                                                            >
                                                        </v-tooltip>
                                                    </v-flex>
                                                </v-layout>
                                                <v-layout
                                                    v-show="other"
                                                    row
                                                    wrap
                                                    align-space-around
                                                    fill-height
                                                >
                                                    <v-flex xs11 md4>
                                                        <v-select
                                                            v-model="form.size"
                                                            :hint="
                                                                `${
                                                                    form.size
                                                                        .value
                                                                }, ${
                                                                    form.size.id
                                                                }`
                                                            "
                                                            prepend-icon="aspect_ratio"
                                                            :items="sizes"
                                                            item-text="value"
                                                            item-value="id"
                                                            :rules="sizesRules"
                                                            :label="
                                                                `${$t('size')}`
                                                            "
                                                            required
                                                            persistent-hint
                                                            return-object
                                                            single-line
                                                        ></v-select>
                                                    </v-flex>
                                                    <v-flex xs1 class="mt-3">
                                                        <v-spacer />
                                                        <v-tooltip
                                                            bottom
                                                            max-width="500px"
                                                        >
                                                            <template
                                                                v-slot:activator="{
                                                                    on
                                                                }"
                                                            >
                                                                <span v-on="on">
                                                                    <v-avatar
                                                                        size="30"
                                                                        color="grey lighten-4"
                                                                        class="elevation-5"
                                                                    >
                                                                        <v-icon
                                                                            :style="{
                                                                                cursor:
                                                                                    'pointer'
                                                                            }"
                                                                            large
                                                                            color="indigo darken-4"
                                                                            >help</v-icon
                                                                        >
                                                                    </v-avatar></span
                                                                >
                                                            </template>
                                                            <span
                                                                class="body-1"
                                                                >{{
                                                                    $t(
                                                                        'measure_miniature'
                                                                    )
                                                                }}</span
                                                            >
                                                        </v-tooltip>
                                                    </v-flex>
                                                    <v-spacer />
                                                    <v-flex xs11 md4>
                                                        <v-text-field
                                                            v-model.trim="
                                                                form.height
                                                            "
                                                            prepend-icon="unfold_less"
                                                            name="height"
                                                            :label="
                                                                `${$t(
                                                                    'height'
                                                                )}`
                                                            "
                                                            type="height"
                                                            :rules="
                                                                dynamicRules
                                                            "
                                                            data-cy="printingHeightField"
                                                            required
                                                        >
                                                        </v-text-field>
                                                    </v-flex>
                                                    <v-flex xs1 class="mt-3">
                                                        <v-tooltip
                                                            bottom
                                                            max-width="500px"
                                                        >
                                                            <template
                                                                v-slot:activator="{
                                                                    on
                                                                }"
                                                            >
                                                                <span v-on="on">
                                                                    <v-avatar
                                                                        size="30"
                                                                        color="grey lighten-4"
                                                                        class="elevation-5"
                                                                    >
                                                                        <v-icon
                                                                            :style="{
                                                                                cursor:
                                                                                    'pointer'
                                                                            }"
                                                                            large
                                                                            color="indigo darken-4"
                                                                            >help</v-icon
                                                                        >
                                                                    </v-avatar></span
                                                                >
                                                            </template>
                                                            <span
                                                                class="body-1"
                                                            >
                                                                {{
                                                                    $t(
                                                                        'over_height'
                                                                    )
                                                                }}</span
                                                            >
                                                        </v-tooltip>
                                                    </v-flex>
                                                </v-layout>
                                            </template>
                                            <v-layout
                                                row
                                                wrap
                                                align-space-around
                                                fill-height
                                            >
                                                <v-flex xs11 sm4>
                                                    <v-checkbox
                                                        v-model="
                                                            form.checkboxHollow
                                                        "
                                                        :label="
                                                            `${$t('hollow')}`
                                                        "
                                                        color="orange"
                                                    ></v-checkbox>
                                                </v-flex>
                                                <v-flex xs1 class="mt-3">
                                                    <v-tooltip
                                                        bottom
                                                        max-width="500px"
                                                    >
                                                        <template
                                                            v-slot:activator="{
                                                                on
                                                            }"
                                                        >
                                                            <span v-on="on">
                                                                <v-avatar
                                                                    size="30"
                                                                    color="grey lighten-4"
                                                                    class="elevation-5"
                                                                >
                                                                    <v-icon
                                                                        :style="{
                                                                            cursor:
                                                                                'pointer'
                                                                        }"
                                                                        large
                                                                        color="indigo darken-4"
                                                                        >help</v-icon
                                                                    >
                                                                </v-avatar></span
                                                            >
                                                        </template>
                                                        <span class="body-1">
                                                            {{
                                                                $t(
                                                                    'hollow_info'
                                                                )
                                                            }}</span
                                                        >
                                                    </v-tooltip>
                                                </v-flex>
                                                <v-spacer />
                                                <v-flex xs11 sm4>
                                                    <v-checkbox
                                                        v-model="
                                                            form.checkboxSupport
                                                        "
                                                        :label="
                                                            `${$t('supports')}`
                                                        "
                                                        color="orange"
                                                    ></v-checkbox>
                                                </v-flex>
                                                <v-flex xs1 class="mt-3">
                                                    <v-tooltip
                                                        bottom
                                                        max-width="500px"
                                                    >
                                                        <template
                                                            v-slot:activator="{
                                                                on
                                                            }"
                                                        >
                                                            <span v-on="on">
                                                                <v-avatar
                                                                    size="30"
                                                                    color="grey lighten-4"
                                                                    class="elevation-5"
                                                                >
                                                                    <v-icon
                                                                        :style="{
                                                                            cursor:
                                                                                'pointer'
                                                                        }"
                                                                        large
                                                                        color="indigo darken-4"
                                                                        >help</v-icon
                                                                    >
                                                                </v-avatar></span
                                                            >
                                                        </template>
                                                        <span class="body-1">
                                                            {{
                                                                $t(
                                                                    'supports_info'
                                                                )
                                                            }}</span
                                                        >
                                                    </v-tooltip>
                                                </v-flex>
                                            </v-layout>
                                            <v-layout
                                                row
                                                wrap
                                                align-space-around
                                                fill-height
                                            >
                                                <v-flex xs11 sm4>
                                                    <v-checkbox
                                                        v-model="
                                                            form.checkboxPostProcessing
                                                        "
                                                        :label="
                                                            `${$t(
                                                                'post_processing'
                                                            )}`
                                                        "
                                                        color="orange"
                                                    ></v-checkbox>
                                                </v-flex>
                                                <v-flex xs1 class="mt-3">
                                                    <v-tooltip
                                                        bottom
                                                        max-width="500px"
                                                    >
                                                        <template
                                                            v-slot:activator="{
                                                                on
                                                            }"
                                                        >
                                                            <span v-on="on">
                                                                <v-avatar
                                                                    size="30"
                                                                    color="grey lighten-4"
                                                                    class="elevation-5"
                                                                >
                                                                    <v-icon
                                                                        :style="{
                                                                            cursor:
                                                                                'pointer'
                                                                        }"
                                                                        large
                                                                        color="indigo darken-4"
                                                                        >help</v-icon
                                                                    >
                                                                </v-avatar></span
                                                            >
                                                        </template>
                                                        <span class="body-1">
                                                            {{
                                                                $t(
                                                                    'post_processing_info'
                                                                )
                                                            }}</span
                                                        >
                                                    </v-tooltip>
                                                </v-flex>
                                                <v-spacer />
                                                <v-flex xs11 sm4>
                                                    <v-select
                                                        v-model="
                                                            form.selectMaterial
                                                        "
                                                        prepend-icon="texture"
                                                        :items="materials"
                                                        :rules="
                                                            selectMaterialRules
                                                        "
                                                        :label="
                                                            `${$t('material')}`
                                                        "
                                                        required
                                                    ></v-select>
                                                </v-flex>
                                                <v-flex xs1 class="mt-3">
                                                    <v-tooltip
                                                        bottom
                                                        max-width="500px"
                                                    >
                                                        <template
                                                            v-slot:activator="{
                                                                on
                                                            }"
                                                        >
                                                            <span v-on="on">
                                                                <v-avatar
                                                                    size="30"
                                                                    color="grey lighten-4"
                                                                    class="elevation-5"
                                                                >
                                                                    <v-icon
                                                                        :style="{
                                                                            cursor:
                                                                                'pointer'
                                                                        }"
                                                                        large
                                                                        color="indigo darken-4"
                                                                        >help</v-icon
                                                                    >
                                                                </v-avatar></span
                                                            >
                                                        </template>
                                                        <span class="body-1">
                                                            {{
                                                                $t(
                                                                    'material_info'
                                                                )
                                                            }}</span
                                                        >
                                                    </v-tooltip>
                                                </v-flex>
                                            </v-layout>
                                            <v-layout
                                                row
                                                wrap
                                                align-space-around
                                                fill-height
                                            >
                                                <v-flex xs11 sm4>
                                                    <v-select
                                                        v-model="
                                                            form.selectQuality
                                                        "
                                                        prepend-icon="high_quality"
                                                        :items="quality"
                                                        :rules="
                                                            selectQualityRules
                                                        "
                                                        :label="
                                                            `${$t('quality')}`
                                                        "
                                                        required
                                                    ></v-select>
                                                </v-flex>
                                                <v-flex xs1 class="mt-3">
                                                    <v-tooltip
                                                        bottom
                                                        max-width="500px"
                                                    >
                                                        <template
                                                            v-slot:activator="{
                                                                on
                                                            }"
                                                        >
                                                            <span v-on="on">
                                                                <v-avatar
                                                                    size="30"
                                                                    color="grey lighten-4"
                                                                    class="elevation-5"
                                                                >
                                                                    <v-icon
                                                                        :style="{
                                                                            cursor:
                                                                                'pointer'
                                                                        }"
                                                                        large
                                                                        color="indigo darken-4"
                                                                        >help</v-icon
                                                                    >
                                                                </v-avatar></span
                                                            >
                                                        </template>
                                                        <span class="body-1">
                                                            {{
                                                                $t(
                                                                    'quality_info'
                                                                )
                                                            }}</span
                                                        >
                                                    </v-tooltip>
                                                </v-flex>
                                                <v-spacer />
                                                <v-flex xs12 sm5>
                                                    <v-text-field
                                                        v-model.trim="
                                                            form.quantity
                                                        "
                                                        prepend-icon="shopping_basket"
                                                        name="quantity"
                                                        :label="
                                                            `${$t('quantity')}`
                                                        "
                                                        type="quantity"
                                                        :rules="quantityRules"
                                                        data-cy="joinNameField"
                                                        required
                                                    >
                                                    </v-text-field>
                                                </v-flex>
                                            </v-layout>
                                            <v-layout
                                                row
                                                fill-height
                                                justify-center
                                            >
                                                <div
                                                    class="title font-weight-light mt-3"
                                                >
                                                    {{
                                                        $t(
                                                            'recipient_address_title'
                                                        )
                                                    }}
                                                </div>
                                            </v-layout>
                                            <v-layout
                                                row
                                                wrap
                                                align-space-around
                                                fill-height
                                            >
                                                <v-flex xs12 sm5>
                                                    <v-autocomplete
                                                        v-model="
                                                            form.selectCountry
                                                        "
                                                        :hint="
                                                            `${
                                                                form
                                                                    .selectCountry
                                                                    .country_name
                                                            }, ${
                                                                form
                                                                    .selectCountry
                                                                    .country_alpha2_code
                                                            }`
                                                        "
                                                        prepend-icon="language"
                                                        :items="countries"
                                                        :filter="
                                                            customFilterCountry
                                                        "
                                                        item-text="country_name"
                                                        item-value="country_alpha2_code"
                                                        :rules="
                                                            selectCountryRules
                                                        "
                                                        :label="
                                                            `${$t('country')}`
                                                        "
                                                        required
                                                        persistent-hint
                                                        return-object
                                                        single-line
                                                    ></v-autocomplete>
                                                </v-flex>
                                                <v-spacer />
                                                <v-flex xs12 sm5>
                                                    <v-text-field
                                                        v-model.trim="
                                                            form.zipCode
                                                        "
                                                        :disabled="
                                                            checkCountrySelect
                                                        "
                                                        prepend-icon="flag"
                                                        name="zip"
                                                        :label="`${$t('zip')}`"
                                                        type="zip"
                                                        :rules="zipRules"
                                                        data-cy="modelingZipCodeField"
                                                        validate-on-blur
                                                        required
                                                        :value="
                                                            form.currentValue
                                                        "
                                                        return-masked-value
                                                        :hint="hintZip"
                                                        persistent-hint
                                                        :mask="zipMask"
                                                        @input="form.zip"
                                                    >
                                                    </v-text-field>
                                                </v-flex>
                                            </v-layout>
                                            <v-layout
                                                row
                                                wrap
                                                align-space-around
                                                fill-height
                                            >
                                                <v-flex xs12 sm5>
                                                    <v-text-field
                                                        v-model.trim="
                                                            form.state
                                                        "
                                                        :disabled="
                                                            checkZipCodeSelect
                                                        "
                                                        prepend-icon="location_on"
                                                        name="state"
                                                        :label="
                                                            `${$t('state')}`
                                                        "
                                                        type="state"
                                                    >
                                                    </v-text-field>
                                                </v-flex>
                                                <v-spacer />
                                                <v-flex xs12 sm5>
                                                    <v-text-field
                                                        v-if="!zipGet"
                                                        v-model.trim="form.city"
                                                        :disabled="
                                                            checkZipCodeSelect
                                                        "
                                                        prepend-icon="location_city"
                                                        name="city"
                                                        :rules="cityRules"
                                                        :label="`${$t('city')}`"
                                                        type="city"
                                                    >
                                                    </v-text-field>
                                                    <v-select
                                                        v-if="zipGet"
                                                        v-model.trim="
                                                            form.selectCity
                                                        "
                                                        :disabled="
                                                            checkZipCodeSelect
                                                        "
                                                        :hint="
                                                            `${
                                                                form.selectCity
                                                                    .place_name
                                                            }, ${
                                                                form.selectCity
                                                                    .state_abbreviation
                                                            }`
                                                        "
                                                        prepend-icon="location_city"
                                                        :items="cities"
                                                        item-text="place_name"
                                                        :label="`${$t('city')}`"
                                                        required
                                                        persistent-hint
                                                        return-object
                                                        single-line
                                                    >
                                                    </v-select>
                                                </v-flex>
                                            </v-layout>
                                            <v-layout
                                                row
                                                wrap
                                                align-space-around
                                                fill-height
                                            >
                                                <v-flex xs12 sm5>
                                                    <v-text-field
                                                        v-model.trim="
                                                            form.address
                                                        "
                                                        :disabled="
                                                            checkZipCodeSelect
                                                        "
                                                        prepend-icon="where_to_vote"
                                                        name="address"
                                                        :label="
                                                            `${$t('address')}`
                                                        "
                                                        type="address"
                                                    >
                                                    </v-text-field>
                                                </v-flex>
                                                <v-spacer />
                                                <v-flex xs12 sm5>
                                                    <v-text-field
                                                        v-model.trim="
                                                            form.phone
                                                        "
                                                        :disabled="
                                                            checkZipCodeSelect
                                                        "
                                                        prepend-icon="phone_iphone"
                                                        name="phone"
                                                        :rules="phoneRules"
                                                        :label="
                                                            `${$t('phone')}`
                                                        "
                                                        :mask="maskPhone"
                                                        type="phone"
                                                    >
                                                    </v-text-field>
                                                </v-flex>
                                            </v-layout>
                                            <v-card-actions class="my-auto">
                                                <v-spacer />
                                                <v-btn
                                                    :disabled="!valid"
                                                    outline
                                                    color="orange"
                                                    :loading="loading"
                                                    depressed
                                                    @click="submit"
                                                >
                                                    {{ $t('order_3dPrinting') }}
                                                </v-btn>
                                            </v-card-actions>
                                        </v-form>
                                    </v-card-text>
                                </v-layout>
                            </v-img>
                        </v-responsive>
                    </v-card-text>
                    <v-snackbar
                        v-model="snackbar"
                        color="info"
                        value="info"
                        label="info"
                        multi-line
                        :timeout="timeout"
                        absolute
                        ><v-icon dark left>
                            done_outline
                        </v-icon>
                        {{ $t('sent_modeling_order') }}
                        <v-btn dark flat @click="snackbar = false">
                            {{ $t('close') }}
                        </v-btn>
                    </v-snackbar>
                    <v-snackbar
                        v-model="snackbarError"
                        color="error"
                        value="error"
                        label="error"
                        multi-line
                        :timeout="timeout"
                        absolute
                        ><v-icon dark left>
                            error
                        </v-icon>
                        {{ $t('error_sent_modeling_order') }}
                        <v-btn dark flat @click="snackbarError = false">
                            {{ $t('close') }}
                        </v-btn>
                    </v-snackbar>
                </v-card>
            </v-flex>
            <v-flex xs12 md5 block mt-5>
                <v-responsive>
                    <v-img
                        :src="require('@/assets/images/3DPrinted.png')"
                        height="100%"
                    />
                </v-responsive>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';
import { VTextField, VSelect, VAutocomplete } from 'vuetify/lib';

export default {
    name: 'Printing',
    components: {
        VTextField,
        VSelect,
        VAutocomplete
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        countries: {
            type: Array,
            required: false,
            default: () => []
        }
    },
    data() {
        return {
            valid: true,
            snackbar: false,
            snackbarError: false,
            loading: false,
            timeout: 10000,
            zipGet: false,
            maskPhone: 'phone',
            zipFlag: 'checkChange',
            zipFlagChange: 'checkZipCodeChange',
            zipMask: '',
            zipRange: '',
            zipCharacters: '8',
            cities: [],
            form: {
                name: '',
                email: '',
                link: '',
                zipCode: '',
                size: {
                    id: 3,
                    value: '54mm (2 1/4") 1:32'
                },
                height: '25',
                checkboxHollow: true,
                checkboxSupport: false,
                checkboxPostProcessing: false,
                quantity: '1',
                selectMaterial: this.$t('plastic'),
                selectQuality: '30 ' + this.$t('micron'),
                selectCountry: {
                    country_alpha2_code: '',
                    country_name: ''
                },
                selectCity: {
                    latitude: '',
                    longitude: '',
                    place_name: '',
                    state: '',
                    state_abbreviation: ''
                },
                state: '',
                city: '',
                address: '',
                phone: '',
                cLang: this.$i18n.locale
            },
            nameRules: [
                v => !!v || this.$t('name_is_required'),
                v =>
                    v.length >= 3 ||
                    this.$t('name_must_be_greater_than_3_characters'),
                v =>
                    v.length <= 20 ||
                    this.$t('name_must_be_less_than_20_characters')
            ],
            emailRules: [
                v => !!v || this.$t('email_is_required'),
                v =>
                    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
                        v
                    ) || this.$t('email_must_be_valid')
            ],
            linkRules: [
                v => !!v || this.$t('link_is_required'),
                v =>
                    /^(ftp|http|https):\/\/[^ "]+$/.test(v) ||
                    this.$t('link_must_be_valid'),
                v =>
                    v.length <= 500 ||
                    this.$t('link_must_be_less_than_500_characters')
            ],
            sizesRules: [v => !!v || this.$t('size_is_required')],
            heightRules: [
                v => !!v || this.$t('height_is_required'),
                v => /^\d+$/.test(v) || this.$t('height_must_be_numeric'),
                v =>
                    Number(v) >= 25 ||
                    this.$t('height_must_be_more_25_millimeters'),
                v =>
                    Number(v) <= 185 ||
                    this.$t('height_must_be_less_185_millimeters')
            ],
            selectMaterialRules: [v => !!v || this.$t('material_is_required')],
            selectQualityRules: [v => !!v || this.$t('quality_is_required')],
            selectCountryRules: [
                v => v.country_name !== '' || this.$t('country_is_required')
            ],
            zipRules: [v => !!v || this.$t('zip_is_required')],
            quantityRules: [
                v => !!v || this.$t('quantity_is_required'),
                v => /^\d+$/.test(v) || this.$t('quantity_must_be_numeric'),
                v =>
                    v.length <= 6 ||
                    this.$t('quantity_must_be_less_than_6_numbers')
            ],
            cityRules: [
                v => !!v || this.$t('city_is_required'),
                v =>
                    /^[a-zA-Z0-9А-Яа-я_]+( [a-zA-Z0-9А-Яа-я_]+)*$/.test(v) ||
                    this.$t('city_must_be_word'),
                v =>
                    v.length >= 1 ||
                    this.$t('city_must_be_greater_than_1_characters'),
                v =>
                    v.length <= 90 ||
                    this.$t('city_must_be_less_than_90_characters')
            ],
            phoneRules: [
                v => !!v || this.$t('phone_is_required'),
                v =>
                    /^[+]?(?:\(\d+(?:\.\d+)?\)|\d+(?:\.\d+)?)(?:[ -]?(?:\(\d+(?:\.\d+)?\)|\d+(?:\.\d+)?))*(?:[ ]?(?:x|ext)\.?[ ]?\d{1,5})?$/.test(
                        v
                    ) || this.$t('phone_number_must_be_digital')
            ],
            sizes: [
                { id: 1, value: '25mm (1") 1:72' },
                { id: 2, value: '40mm (1 1/2") 1:45' },
                { id: 3, value: '54mm (2 1/4") 1:32' },
                { id: 4, value: '60mm (2 1/2") 1:30' },
                { id: 5, value: '70mm (2 3/4") 1:25' },
                { id: 6, value: '75mm (3") 1:24' },
                { id: 0, value: this.$t('other') }
            ],
            materials: [this.$t('plastic'), this.$t('metal')],
            quality: [
                '30 ' + this.$t('micron'),
                '50 ' + this.$t('micron'),
                '100 ' + this.$t('micron')
            ]
        };
    },
    computed: {
        hintZip() {
            if (this.zipRange !== '') {
                return this.$t('range') + ' ' + this.zipRange;
            } else {
                return this.$t('range') + ' ' + this.$t('not_determined');
            }
        },
        checkChange() {
            return (
                this.form.selectCountry.country_alpha2_code +
                this.form.selectCountry.country_name
            );
        },
        checkCountrySelect() {
            return this.form.selectCountry.country_name === '';
        },
        checkZipCodeSelect() {
            return this.form.zipCode === '';
        },
        checkZipCodeChange() {
            return this.form.zipCode;
        },
        other() {
            return this.form.size.id === 0;
        },
        dynamicRules() {
            if (this.form.size.id === 0) {
                return this.heightRules;
            }
            return [];
        }
    },
    watch: {
        checkChange: async function(newValue, oldValue) {
            try {
                this.$refs.form.resetValidation();
                this.zipMask = '';
                this.zipRange = '';
                this.form.zipCode = '';
                this.form.selectCity.latitude = '';
                this.form.selectCity.longitude = '';
                this.form.selectCity.state = '';
                this.form.selectCity.state_abbreviation = '';
                this.form.selectCity.place_name = '';
                this.form.state = '';
                this.form.city = '';
                const local = this.form.selectCountry.country_alpha2_code;
                const apiUrl = 'http://127.0.0.1:9090/api/v1/order/masks';
                await axios
                    .post(apiUrl, {
                        country_alpha2_code: local
                    })
                    .then(response => {
                        this.zipMask = response.data.data.mask;
                        this.zipRange = response.data.data.range;
                        this.zipCharacters = response.data.data.characters;
                        this.zipGet = true;
                    })
                    .catch(e => {
                        console.log('This is get mask!!! error: ' + e);
                        this.zipMask = '';
                        this.zipRange = '';
                        this.zipCharacters = '';
                        this.zipGet = false;
                    });
            } catch (e) {}
        },

        checkZipCodeChange: async function(newValue, oldValue) {
            console.log(
                Number(this.zipCharacters),
                ' ',
                this.form.zipCode.length
            );
            if (
                this.zipGet &&
                this.form.zipCode.length >= Number(this.zipCharacters)
            ) {
                try {
                    this.$refs.form.resetValidation();
                    this.cities = [];
                    this.form.selectCity.latitude = '';
                    this.form.selectCity.longitude = '';
                    this.form.selectCity.state = '';
                    this.form.selectCity.state_abbreviation = '';
                    this.form.selectCity.place_name = '';
                    this.form.state = '';
                    const local = this.form.selectCountry.country_alpha2_code;
                    const apiUrlZ =
                        'http://api.zippopotam.us/' +
                        local +
                        '/' +
                        this.form.zipCode;
                    await axios
                        .get(apiUrlZ)
                        .then(response => {
                            const self = this;
                            function changeKey(object) {
                                const position = {};
                                position.latitude = object.latitude;
                                position.longitude = object.longitude;
                                position.state = object.state;
                                position.state_abbreviation =
                                    object['state abbreviation'];
                                position.place_name = object['place name'];
                                self.cities.push(position);
                            }
                            const places = response.data.places;

                            places.forEach(changeKey);
                            this.form.selectCity.latitude =
                                response.data.places[0].latitude;
                            this.form.selectCity.longitude =
                                response.data.places[0].longitude;
                            this.form.selectCity.state =
                                response.data.places[0].state;
                            this.form.selectCity.state_abbreviation =
                                response.data.places[0]['state abbreviation'];
                            this.form.selectCity.place_name =
                                response.data.places[0]['place name'];
                            this.form.state = this.form.selectCity.state;

                            console.log('Полный список: ', this.cities);
                        })
                        .catch(e => {
                            console.log('This is get zippopotam error: ' + e);
                        });
                } catch (e) {
                    console.log('This is not enough: ' + e);
                }
            }
        }
    },
    methods: {
        customFilterCountry(item, queryText, itemText) {
            const textOne = item.country_name.toLowerCase();
            const textTwo = item.country_alpha2_code.toLowerCase();
            const searchText = queryText.toLowerCase();

            return (
                textOne.indexOf(searchText) > -1 ||
                textTwo.indexOf(searchText) > -1
            );
        },
        submit() {
            if (this.$refs.form.validate()) {
                try {
                    this.loading = true;
                    // const self = this;
                    console.log(this.form);
                    // await this.$axios
                    //     .post('/order/modeling', this.form)
                    //     .then(response => {
                    //         // console.log('1', response.data.errors.email[0])
                    //         self.snackbar = true;
                    //         self.form.name = '';
                    //         self.form.email = '';
                    //         self.form.link = '';
                    //         self.form.checkbox = false;
                    //         self.loading = false;
                    //         self.$refs.form.resetValidation();
                    //     })
                    //     .catch(err => {
                    //         console.log('err11 ', err);
                    //         self.snackbarError = true;
                    //         self.loading = false;
                    //     });
                    // setTimeout(function() {
                    //     self.snackbar = true
                    //     self.form.name = ''
                    //     self.form.email = ''
                    //     self.form.link = ''
                    //     self.form.checkbox = false
                    //     self.loading = false
                    //     self.$refs.form.resetValidation()
                    // }, this.timeout / 2)
                } catch (e) {}
            }
        }
    }
};
</script>

<style scoped></style>
