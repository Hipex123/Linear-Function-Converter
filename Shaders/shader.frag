#version 450

layout(binding = 1) uniform sampler2D texSampler1;
layout(binding = 2) uniform sampler2D texSampler2;

layout(location = 0) in vec3 fragColor;
layout(location = 1) in vec2 fragTexCoord;

layout(location = 0) out vec4 outColor;

void main() {
    vec2 fragCoords = gl_FragCoord.xy;

    if (fragCoords.x < 500){
        outColor = texture(texSampler1, fragTexCoord);
    }
    else {
        outColor = texture(texSampler2, fragTexCoord);
    }
}