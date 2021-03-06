struct VSOutput {
	float4 Position : SV_POSITION;
    float2 TexCoord : TEXCOORD;
};

SamplerState	uSampler0	: register(s1);
Texture2D		Texture		: register(t0);

float4 main(VSOutput input) : SV_TARGET
{
    return Texture.Sample(uSampler0, input.TexCoord);
}